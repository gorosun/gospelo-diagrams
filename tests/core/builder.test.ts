import { describe, expect, test } from 'bun:test';
import { createBuilder } from '../../src/core/builder';

describe('DiagramBuilder', () => {
  test('should create empty diagram with default title', () => {
    const builder = createBuilder();
    const diagram = builder.build();
    expect(diagram.title).toBe('Untitled Diagram');
    expect(diagram.nodes).toHaveLength(0);
  });

  test('should create diagram from partial definition', () => {
    const builder = createBuilder({
      title: 'Test Diagram',
      nodes: [{ id: 'test', icon: 'aws:lambda', position: [100, 100] }],
    });
    const diagram = builder.build();
    expect(diagram.title).toBe('Test Diagram');
    expect(diagram.nodes).toHaveLength(1);
  });

  test('should create diagram from JSON string', () => {
    const json = JSON.stringify({
      title: 'JSON Diagram',
      nodes: [{ id: 'node1', icon: 'aws:s3' }],
    });
    const builder = createBuilder(json);
    const diagram = builder.build();
    expect(diagram.title).toBe('JSON Diagram');
    expect(diagram.nodes[0].id).toBe('node1');
  });

  test('should set title and subtitle', () => {
    const builder = createBuilder()
      .setTitle('My Diagram')
      .setSubtitle('Architecture Overview');
    const diagram = builder.build();
    expect(diagram.title).toBe('My Diagram');
    expect(diagram.subtitle).toBe('Architecture Overview');
  });

  test('should add node', () => {
    const builder = createBuilder()
      .addNode({ id: 'test', icon: 'aws:lambda', position: [100, 100] });
    const diagram = builder.build();
    expect(diagram.nodes).toHaveLength(1);
    expect(diagram.nodes[0].id).toBe('test');
    expect(diagram.nodes[0].icon).toBe('aws:lambda');
  });

  test('should add multiple nodes', () => {
    const builder = createBuilder()
      .addNodes([
        { id: 'node1', icon: 'aws:lambda' },
        { id: 'node2', icon: 'aws:dynamodb' },
      ]);
    const diagram = builder.build();
    expect(diagram.nodes).toHaveLength(2);
  });

  test('should update node', () => {
    const builder = createBuilder()
      .addNode({ id: 'test', icon: 'aws:lambda', label: 'Original' })
      .updateNode('test', { label: 'Updated', sublabel: 'v2' });
    const diagram = builder.build();
    expect(diagram.nodes[0].label).toBe('Updated');
    expect(diagram.nodes[0].sublabel).toBe('v2');
  });

  test('should throw on updating nonexistent node', () => {
    const builder = createBuilder();
    expect(() => builder.updateNode('nonexistent', { label: 'test' })).toThrow('Node not found: nonexistent');
  });

  test('should move node', () => {
    const builder = createBuilder()
      .addNode({ id: 'test', icon: 'aws:lambda', position: [100, 100] })
      .moveNode('test', [200, 300]);
    const diagram = builder.build();
    expect(diagram.nodes[0].position).toEqual([200, 300]);
  });

  test('should remove node', () => {
    const builder = createBuilder()
      .addNode({ id: 'test', icon: 'aws:lambda' });
    expect(builder.hasNode('test')).toBe(true);
    builder.removeNode('test');
    expect(builder.hasNode('test')).toBe(false);
  });

  test('should throw on removing nonexistent node', () => {
    const builder = createBuilder();
    expect(() => builder.removeNode('nonexistent')).toThrow('Node not found: nonexistent');
  });

  test('should remove connections when removing node', () => {
    const builder = createBuilder()
      .addNode({ id: 'a', icon: 'aws:lambda' })
      .addNode({ id: 'b', icon: 'aws:dynamodb' })
      .addConnection({ from: 'a', to: 'b' });
    expect(builder.hasConnection('a', 'b')).toBe(true);
    builder.removeNode('b');
    expect(builder.hasConnection('a', 'b')).toBe(false);
  });

  test('should insert node below reference', () => {
    const builder = createBuilder()
      .addNode({ id: 'ref', icon: 'aws:lambda', position: [200, 100] })
      .insertBelow('ref', { id: 'new', icon: 'aws:dynamodb' });
    const diagram = builder.build();
    const newNode = diagram.nodes.find(n => n.id === 'new');
    expect(newNode?.position?.[0]).toBe(200); // same X
    expect(newNode?.position?.[1]).toBe(200); // Y + 100
  });

  test('should insert node above reference', () => {
    const builder = createBuilder()
      .addNode({ id: 'ref', icon: 'aws:lambda', position: [200, 200] })
      .insertAbove('ref', { id: 'new', icon: 'aws:api_gateway' });
    const diagram = builder.build();
    const newNode = diagram.nodes.find(n => n.id === 'new');
    expect(newNode?.position?.[0]).toBe(200); // same X
    expect(newNode?.position?.[1]).toBe(100); // Y - 100
  });

  test('should insert node to the right', () => {
    const builder = createBuilder()
      .addNode({ id: 'ref', icon: 'aws:lambda', position: [200, 100] })
      .insertRight('ref', { id: 'new', icon: 'aws:sqs' });
    const diagram = builder.build();
    const newNode = diagram.nodes.find(n => n.id === 'new');
    expect(newNode?.position?.[0]).toBe(350); // X + 150
    expect(newNode?.position?.[1]).toBe(100); // same Y
  });

  test('should insert node to the left', () => {
    const builder = createBuilder()
      .addNode({ id: 'ref', icon: 'aws:lambda', position: [300, 100] })
      .insertLeft('ref', { id: 'new', icon: 'aws:api_gateway' });
    const diagram = builder.build();
    const newNode = diagram.nodes.find(n => n.id === 'new');
    expect(newNode?.position?.[0]).toBe(150); // X - 150
    expect(newNode?.position?.[1]).toBe(100); // same Y
  });

  test('should add connection', () => {
    const builder = createBuilder()
      .addNode({ id: 'a', icon: 'aws:lambda' })
      .addNode({ id: 'b', icon: 'aws:dynamodb' })
      .addConnection({ from: 'a', to: 'b' });
    const diagram = builder.build();
    expect(diagram.connections).toHaveLength(1);
    expect(diagram.connections![0].from).toBe('a');
    expect(diagram.connections![0].to).toBe('b');
  });

  test('should throw on adding connection with nonexistent source', () => {
    const builder = createBuilder()
      .addNode({ id: 'b', icon: 'aws:dynamodb' });
    expect(() => builder.addConnection({ from: 'a', to: 'b' })).toThrow('Source node not found: a');
  });

  test('should throw on adding connection with nonexistent target', () => {
    const builder = createBuilder()
      .addNode({ id: 'a', icon: 'aws:lambda' });
    expect(() => builder.addConnection({ from: 'a', to: 'b' })).toThrow('Target node not found: b');
  });

  test('should update connection', () => {
    const builder = createBuilder()
      .addNode({ id: 'a', icon: 'aws:lambda' })
      .addNode({ id: 'b', icon: 'aws:dynamodb' })
      .addConnection({ from: 'a', to: 'b' })
      .updateConnection('a', 'b', { label: 'Data Flow', bidirectional: true });
    const diagram = builder.build();
    expect(diagram.connections![0].label).toBe('Data Flow');
    expect(diagram.connections![0].bidirectional).toBe(true);
  });

  test('should remove connection', () => {
    const builder = createBuilder()
      .addNode({ id: 'a', icon: 'aws:lambda' })
      .addNode({ id: 'b', icon: 'aws:dynamodb' })
      .addConnection({ from: 'a', to: 'b' });
    expect(builder.hasConnection('a', 'b')).toBe(true);
    builder.removeConnection('a', 'b');
    expect(builder.hasConnection('a', 'b')).toBe(false);
  });

  test('should throw on removing nonexistent connection', () => {
    const builder = createBuilder();
    expect(() => builder.removeConnection('a', 'b')).toThrow('Connection not found: a -> b');
  });

  test('should align nodes to top of reference', () => {
    const builder = createBuilder()
      .addNode({ id: 'ref', icon: 'aws:lambda', position: [200, 150] })
      .addNode({ id: 'a', icon: 'aws:s3', position: [400, 200] })
      .addNode({ id: 'b', icon: 'aws:dynamodb', position: [600, 180] })
      .alignTop('ref', ['a', 'b']);
    const diagram = builder.build();
    expect(diagram.nodes.find(n => n.id === 'a')?.position?.[1]).toBe(150);
    expect(diagram.nodes.find(n => n.id === 'b')?.position?.[1]).toBe(150);
    // X should remain unchanged
    expect(diagram.nodes.find(n => n.id === 'a')?.position?.[0]).toBe(400);
  });

  test('should align nodes to left of reference', () => {
    const builder = createBuilder()
      .addNode({ id: 'ref', icon: 'aws:lambda', position: [200, 150] })
      .addNode({ id: 'a', icon: 'aws:s3', position: [250, 300] })
      .addNode({ id: 'b', icon: 'aws:dynamodb', position: [220, 450] })
      .alignLeft('ref', ['a', 'b']);
    const diagram = builder.build();
    expect(diagram.nodes.find(n => n.id === 'a')?.position?.[0]).toBe(200);
    expect(diagram.nodes.find(n => n.id === 'b')?.position?.[0]).toBe(200);
    // Y should remain unchanged
    expect(diagram.nodes.find(n => n.id === 'a')?.position?.[1]).toBe(300);
  });

  test('should distribute nodes horizontally', () => {
    const builder = createBuilder()
      .addNode({ id: 'a', icon: 'aws:lambda', position: [100, 150] })
      .addNode({ id: 'b', icon: 'aws:s3', position: [150, 150] })
      .addNode({ id: 'c', icon: 'aws:dynamodb', position: [180, 150] })
      .distributeHorizontally(['a', 'b', 'c'], 200);
    const diagram = builder.build();
    expect(diagram.nodes.find(n => n.id === 'a')?.position?.[0]).toBe(100);
    expect(diagram.nodes.find(n => n.id === 'b')?.position?.[0]).toBe(300);
    expect(diagram.nodes.find(n => n.id === 'c')?.position?.[0]).toBe(500);
  });

  test('should distribute nodes vertically', () => {
    const builder = createBuilder()
      .addNode({ id: 'a', icon: 'aws:lambda', position: [200, 100] })
      .addNode({ id: 'b', icon: 'aws:s3', position: [200, 120] })
      .addNode({ id: 'c', icon: 'aws:dynamodb', position: [200, 150] })
      .distributeVertically(['a', 'b', 'c'], 150);
    const diagram = builder.build();
    expect(diagram.nodes.find(n => n.id === 'a')?.position?.[1]).toBe(100);
    expect(diagram.nodes.find(n => n.id === 'b')?.position?.[1]).toBe(250);
    expect(diagram.nodes.find(n => n.id === 'c')?.position?.[1]).toBe(400);
  });

  test('should set background', () => {
    const builder = createBuilder()
      .setBackground({ type: 'gradient', startColor: '#fff', endColor: '#eee', direction: 'south' });
    const diagram = builder.build();
    expect(diagram.background?.type).toBe('gradient');
  });

  test('should set color', () => {
    const builder = createBuilder()
      .setColor('primary', '#0073BB');
    const diagram = builder.build();
    expect(diagram.colors?.primary).toBe('#0073BB');
  });

  test('should output JSON', () => {
    const builder = createBuilder()
      .setTitle('Test')
      .addNode({ id: 'test', icon: 'aws:lambda' });
    const json = builder.toJSON();
    expect(json).toContain('"title":"Test"');
    expect(json).toContain('"id":"test"');
  });

  test('should output pretty JSON', () => {
    const builder = createBuilder().setTitle('Test');
    const json = builder.toJSON(true);
    expect(json).toContain('\n');
    expect(json).toContain('  ');
  });

  test('should apply patch with multiple operations', () => {
    const builder = createBuilder()
      .addNode({ id: 'existing', icon: 'aws:lambda', position: [100, 100] })
      .applyPatch({
        title: 'Patched Diagram',
        addNodes: [
          { id: 'new1', icon: 'aws:dynamodb', position: [200, 100] },
        ],
        updateNodes: [
          { id: 'existing', label: 'Updated Lambda' },
        ],
        addConnections: [
          { from: 'existing', to: 'new1' },
        ],
      });
    const diagram = builder.build();
    expect(diagram.title).toBe('Patched Diagram');
    expect(diagram.nodes).toHaveLength(2);
    expect(diagram.nodes.find(n => n.id === 'existing')?.label).toBe('Updated Lambda');
    expect(diagram.connections).toHaveLength(1);
  });
});
