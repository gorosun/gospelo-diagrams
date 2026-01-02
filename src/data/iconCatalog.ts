/**
 * Auto-generated icon catalog
 * Generated from src/icons/ JSON files
 * Run: bun scripts/build-catalog.ts
 */

export interface IconEntry {
  slug: string;
  displayName: string;
  category: string;
  externalUrl: string;
}

export interface ProviderCatalog {
  [category: string]: IconEntry[];
}

export interface IconCatalog {
  [provider: string]: ProviderCatalog;
}

/**
 * Icon source version information
 * Used to track upstream repository versions for reproducibility
 */
export interface IconSourceVersion {
  repository: string;
  commitId: string;
  commitDate: string;
  lastUpdated: string;
}

export const iconSourceVersions: Record<string, IconSourceVersion> = {
  "aws": {
    "repository": "https://github.com/AwesomeLogos/aws-icons",
    "commitId": "b60dadba55b9a04faf334401114d529cd93d9748",
    "commitDate": "2024-03-11",
    "lastUpdated": "2025-01-02"
  },
  "azure": {
    "repository": "https://github.com/benc-uk/icon-collection",
    "commitId": "e33ee714d05a24a81cf6ccd967ef34b22cb77e65",
    "commitDate": "2021-10-12",
    "lastUpdated": "2025-01-02"
  },
  "google-cloud": {
    "repository": "https://github.com/AwesomeLogos/google-cloud-icons",
    "commitId": "9fe9b31ddce5804ae4e6cf4d1bda5d5ee5ae6192",
    "commitDate": "2024-03-11",
    "lastUpdated": "2025-01-02"
  },
  "tech-stack": {
    "repository": "https://github.com/simple-icons/simple-icons",
    "commitId": "a1c92418865a14cc3b1f58a1731ad603785251bf",
    "commitDate": "2025-12-31",
    "lastUpdated": "2026-01-01"
  }
};

/**
 * Icon catalog with external URLs for all providers
 */
export const iconCatalog: IconCatalog = {
  "aws": {
    "General": [
      {
        "slug": "marketplace_dark",
        "displayName": "Marketplace Dark",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_General-Icons/64/Arch_AWS-Marketplace_Dark_64.svg"
      },
      {
        "slug": "marketplace_light",
        "displayName": "Marketplace Light",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_General-Icons/64/Arch_AWS-Marketplace_Light_64.svg"
      },
      {
        "slug": "res_alert",
        "displayName": "Res Alert",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Alert_48_Light.svg"
      },
      {
        "slug": "res_authenticated_user",
        "displayName": "Res Authenticated User",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Authenticated-User_48_Light.svg"
      },
      {
        "slug": "res_camera",
        "displayName": "Res Camera",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Camera_48_Light.svg"
      },
      {
        "slug": "res_chat",
        "displayName": "Res Chat",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Chat_48_Light.svg"
      },
      {
        "slug": "res_client",
        "displayName": "Res Client",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Client_48_Light.svg"
      },
      {
        "slug": "res_cold_storage",
        "displayName": "Res Cold Storage",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Cold-Storage_48_Light.svg"
      },
      {
        "slug": "res_credentials",
        "displayName": "Res Credentials",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Credentials_48_Light.svg"
      },
      {
        "slug": "res_data_stream",
        "displayName": "Res Data Stream",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Data-Stream_48_Light.svg"
      },
      {
        "slug": "res_data_table",
        "displayName": "Res Data Table",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Data-Table_48_Light.svg"
      },
      {
        "slug": "res_database",
        "displayName": "Res Database",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Database_48_Light.svg"
      },
      {
        "slug": "res_disk",
        "displayName": "Res Disk",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Disk_48_Light.svg"
      },
      {
        "slug": "res_document",
        "displayName": "Res Document",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Document_48_Light.svg"
      },
      {
        "slug": "res_documents",
        "displayName": "Res Documents",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Documents_48_Light.svg"
      },
      {
        "slug": "res_email",
        "displayName": "Res Email",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Email_48_Light.svg"
      },
      {
        "slug": "res_firewall",
        "displayName": "Res Firewall",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Firewall_48_Light.svg"
      },
      {
        "slug": "res_folder",
        "displayName": "Res Folder",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Folder_48_Light.svg"
      },
      {
        "slug": "res_folders",
        "displayName": "Res Folders",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Folders_48_Light.svg"
      },
      {
        "slug": "res_forums",
        "displayName": "Res Forums",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Forums_48_Light.svg"
      },
      {
        "slug": "res_gear",
        "displayName": "Res Gear",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Gear_48_Light.svg"
      },
      {
        "slug": "res_generic_application",
        "displayName": "Res Generic Application",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Generic-Application_48_Light.svg"
      },
      {
        "slug": "res_git_repository",
        "displayName": "Res Git Repository",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Git-Repository_48_Light.svg"
      },
      {
        "slug": "res_globe",
        "displayName": "Res Globe",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Globe_48_Light.svg"
      },
      {
        "slug": "res_internet",
        "displayName": "Res Internet",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Internet_48_Light.svg"
      },
      {
        "slug": "res_internet_alt1",
        "displayName": "Res Internet Alt1",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Internet-alt1_48_Light.svg"
      },
      {
        "slug": "res_internet_alt2",
        "displayName": "Res Internet Alt2",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Internet-alt2_48_Light.svg"
      },
      {
        "slug": "res_json_script",
        "displayName": "Res Json Script",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_JSON-Script_48_Light.svg"
      },
      {
        "slug": "res_logs",
        "displayName": "Res Logs",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Logs_48_Light.svg"
      },
      {
        "slug": "res_magnifying_glass",
        "displayName": "Res Magnifying Glass",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Magnifying-Glass_48_Light.svg"
      },
      {
        "slug": "res_management_console",
        "displayName": "Res Management Console",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_AWS-Management-Console_48_Light.svg"
      },
      {
        "slug": "res_metrics",
        "displayName": "Res Metrics",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Metrics_48_Light.svg"
      },
      {
        "slug": "res_mobile_client",
        "displayName": "Res Mobile Client",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Mobile-client_48_Light.svg"
      },
      {
        "slug": "res_multimedia",
        "displayName": "Res Multimedia",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Multimedia_48_Light.svg"
      },
      {
        "slug": "res_office_building",
        "displayName": "Res Office Building",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Office-building_48_Light.svg"
      },
      {
        "slug": "res_programming_language",
        "displayName": "Res Programming Language",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Programming-Language_48_Light.svg"
      },
      {
        "slug": "res_question",
        "displayName": "Res Question",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Question_48_Light.svg"
      },
      {
        "slug": "res_recover",
        "displayName": "Res Recover",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Recover_48_Light.svg"
      },
      {
        "slug": "res_saml_token",
        "displayName": "Res Saml Token",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_SAML-token_48_Light.svg"
      },
      {
        "slug": "res_sdk",
        "displayName": "Res Sdk",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_SDK_48_Light.svg"
      },
      {
        "slug": "res_server",
        "displayName": "Res Server",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Server_48_Light.svg"
      },
      {
        "slug": "res_servers",
        "displayName": "Res Servers",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Servers_48_Light.svg"
      },
      {
        "slug": "res_shield",
        "displayName": "Res Shield",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Shield_48_Light.svg"
      },
      {
        "slug": "res_source_code",
        "displayName": "Res Source Code",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Source-Code_48_Light.svg"
      },
      {
        "slug": "res_ssl_padlock",
        "displayName": "Res Ssl Padlock",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_SSL-padlock_48_Light.svg"
      },
      {
        "slug": "res_tape_storage",
        "displayName": "Res Tape Storage",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Tape-storage_48_Light.svg"
      },
      {
        "slug": "res_toolkit",
        "displayName": "Res Toolkit",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Toolkit_48_Light.svg"
      },
      {
        "slug": "res_user",
        "displayName": "Res User",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_User_48_Light.svg"
      },
      {
        "slug": "res_users",
        "displayName": "Res Users",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Users_48_Light.svg"
      }
    ],
    "Front-End Web & Mobile": [
      {
        "slug": "res_amplify_aws_amplify_studio",
        "displayName": "Res Amplify Aws Amplify Studio",
        "category": "Front-End Web & Mobile",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Front-End-Web-Mobile/Res_AWS-Amplify_AWS-Amplify-Studio_48.svg"
      },
      {
        "slug": "res_location_service_geofence",
        "displayName": "Res Location Service Geofence",
        "category": "Front-End Web & Mobile",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Front-End-Web-Mobile/Res_Amazon-Location-Service_Geofence_48.svg"
      },
      {
        "slug": "res_location_service_map_",
        "displayName": "Res Location Service Map ",
        "category": "Front-End Web & Mobile",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Front-End-Web-Mobile/Res_Amazon-Location-Service_Map _48.svg"
      },
      {
        "slug": "res_location_service_place",
        "displayName": "Res Location Service Place",
        "category": "Front-End Web & Mobile",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Front-End-Web-Mobile/Res_Amazon-Location-Service_Place_48.svg"
      },
      {
        "slug": "res_location_service_routes",
        "displayName": "Res Location Service Routes",
        "category": "Front-End Web & Mobile",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Front-End-Web-Mobile/Res_Amazon-Location-Service_Routes_48.svg"
      },
      {
        "slug": "res_location_service_track_",
        "displayName": "Res Location Service Track ",
        "category": "Front-End Web & Mobile",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Front-End-Web-Mobile/Res_Amazon-Location-Service_Track _48.svg"
      },
      {
        "slug": "location_service",
        "displayName": "Location Service",
        "category": "Front-End Web & Mobile",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Front-End-Web-Mobile/64/Arch_Amazon-Location-Service_64.svg"
      },
      {
        "slug": "amplify",
        "displayName": "Amplify",
        "category": "Front-End Web & Mobile",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Front-End-Web-Mobile/64/Arch_AWS-Amplify_64.svg"
      },
      {
        "slug": "device_farm",
        "displayName": "Device Farm",
        "category": "Front-End Web & Mobile",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Front-End-Web-Mobile/64/Arch_AWS-Device-Farm_64.svg"
      }
    ],
    "App-Integration": [
      {
        "slug": "api_gateway",
        "displayName": "Api Gateway",
        "category": "App-Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-API-Gateway_64.svg"
      },
      {
        "slug": "appflow",
        "displayName": "Appflow",
        "category": "App-Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-AppFlow_64.svg"
      },
      {
        "slug": "eventbridge",
        "displayName": "Eventbridge",
        "category": "App-Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-EventBridge_64.svg"
      },
      {
        "slug": "managed_workflows_for_apache_airflow",
        "displayName": "Managed Workflows For Apache Airflow",
        "category": "App-Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-Managed-Workflows-for-Apache-Airflow_64.svg"
      },
      {
        "slug": "mq",
        "displayName": "Mq",
        "category": "App-Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-MQ_64.svg"
      },
      {
        "slug": "simple_notification_service",
        "displayName": "Simple Notification Service",
        "category": "App-Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-Simple-Notification-Service_64.svg"
      },
      {
        "slug": "simple_queue_service",
        "displayName": "Simple Queue Service",
        "category": "App-Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-Simple-Queue-Service_64.svg"
      },
      {
        "slug": "appsync",
        "displayName": "Appsync",
        "category": "App-Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_AWS-AppSync_64.svg"
      },
      {
        "slug": "b2b_data_interchange",
        "displayName": "B2b Data Interchange",
        "category": "App-Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_AWS-B2B-Data-Interchange_64.svg"
      },
      {
        "slug": "console_mobile_application",
        "displayName": "Console Mobile Application",
        "category": "App-Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_AWS-Console-Mobile-Application_64.svg"
      },
      {
        "slug": "express_workflows",
        "displayName": "Express Workflows",
        "category": "App-Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_AWS-Express-Workflows_64.svg"
      },
      {
        "slug": "step_functions",
        "displayName": "Step Functions",
        "category": "App-Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_AWS-Step-Functions_64.svg"
      }
    ],
    "Networking & Content Delivery": [
      {
        "slug": "res_app_mesh_mesh",
        "displayName": "Res App Mesh Mesh",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-App-Mesh_Mesh_48.svg"
      },
      {
        "slug": "res_app_mesh_virtual_gateway",
        "displayName": "Res App Mesh Virtual Gateway",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-App-Mesh_Virtual-Gateway_48.svg"
      },
      {
        "slug": "res_app_mesh_virtual_node",
        "displayName": "Res App Mesh Virtual Node",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-App-Mesh_Virtual-Node_48.svg"
      },
      {
        "slug": "res_app_mesh_virtual_router",
        "displayName": "Res App Mesh Virtual Router",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-App-Mesh_Virtual-Router_48.svg"
      },
      {
        "slug": "res_app_mesh_virtual_service",
        "displayName": "Res App Mesh Virtual Service",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-App-Mesh_Virtual-Service_48.svg"
      },
      {
        "slug": "res_cloud_map_namespace",
        "displayName": "Res Cloud Map Namespace",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Cloud-Map_Namespace_48.svg"
      },
      {
        "slug": "res_cloud_map_resource",
        "displayName": "Res Cloud Map Resource",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Cloud-Map_Resource_48.svg"
      },
      {
        "slug": "res_cloud_map_service",
        "displayName": "Res Cloud Map Service",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Cloud-Map_Service_48.svg"
      },
      {
        "slug": "res_cloud_wan_core_network_edge",
        "displayName": "Res Cloud Wan Core Network Edge",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Cloud-WAN_Core-Network-Edge_48.svg"
      },
      {
        "slug": "res_cloud_wan_segment_network",
        "displayName": "Res Cloud Wan Segment Network",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Cloud-WAN_Segment-Network_48.svg"
      },
      {
        "slug": "res_cloud_wan_transit_gateway_route_table_attachment",
        "displayName": "Res Cloud Wan Transit Gateway Route Table Attachment",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Cloud-WAN_Transit-Gateway-Route-Table-Attachment_48.svg"
      },
      {
        "slug": "res_cloudfront_download_distribution",
        "displayName": "Res Cloudfront Download Distribution",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-CloudFront_Download-Distribution_48.svg"
      },
      {
        "slug": "res_cloudfront_edge_location",
        "displayName": "Res Cloudfront Edge Location",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-CloudFront_Edge-Location_48.svg"
      },
      {
        "slug": "res_cloudfront_functions",
        "displayName": "Res Cloudfront Functions",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-CloudFront_Functions_48.svg"
      },
      {
        "slug": "res_cloudfront_streaming_distribution",
        "displayName": "Res Cloudfront Streaming Distribution",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-CloudFront_Streaming-Distribution_48.svg"
      },
      {
        "slug": "res_direct_connect_gateway",
        "displayName": "Res Direct Connect Gateway",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Direct-Connect_Gateway_48.svg"
      },
      {
        "slug": "res_elastic_load_balancing_application_load_balancer",
        "displayName": "Res Elastic Load Balancing Application Load Balancer",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Elastic-Load-Balancing_Application-Load-Balancer_48.svg"
      },
      {
        "slug": "res_elastic_load_balancing_classic_load_balancer",
        "displayName": "Res Elastic Load Balancing Classic Load Balancer",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Elastic-Load-Balancing_Classic-Load-Balancer_48.svg"
      },
      {
        "slug": "res_elastic_load_balancing_gateway_load_balancer",
        "displayName": "Res Elastic Load Balancing Gateway Load Balancer",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Elastic-Load-Balancing_Gateway-Load-Balancer_48.svg"
      },
      {
        "slug": "res_elastic_load_balancing_network_load_balancer",
        "displayName": "Res Elastic Load Balancing Network Load Balancer",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Elastic-Load-Balancing_Network-Load-Balancer_48.svg"
      },
      {
        "slug": "res_route_53_hosted_zone",
        "displayName": "Res Route 53 Hosted Zone",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53-Hosted-Zone_48.svg"
      },
      {
        "slug": "res_route_53_readiness_checks",
        "displayName": "Res Route 53 Readiness Checks",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Readiness-Checks_48.svg"
      },
      {
        "slug": "res_route_53_resolver",
        "displayName": "Res Route 53 Resolver",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Resolver_48.svg"
      },
      {
        "slug": "res_route_53_resolver_dns_firewall",
        "displayName": "Res Route 53 Resolver Dns Firewall",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Resolver-DNS-Firewall_48.svg"
      },
      {
        "slug": "res_route_53_resolver_query_logging",
        "displayName": "Res Route 53 Resolver Query Logging",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Resolver-Query-Logging_48.svg"
      },
      {
        "slug": "res_route_53_route_53_application_recovery_controller",
        "displayName": "Res Route 53 Route 53 Application Recovery Controller",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Route-53-Application-Recovery-Controller_48.svg"
      },
      {
        "slug": "res_route_53_route_table",
        "displayName": "Res Route 53 Route Table",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Route-Table_48.svg"
      },
      {
        "slug": "res_route_53_routing_controls",
        "displayName": "Res Route 53 Routing Controls",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Routing-Controls_48.svg"
      },
      {
        "slug": "res_transit_gateway_attachment",
        "displayName": "Res Transit Gateway Attachment",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Transit-Gateway_Attachment_48.svg"
      },
      {
        "slug": "res_vpc_carrier_gateway",
        "displayName": "Res Vpc Carrier Gateway",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Carrier-Gateway_48.svg"
      },
      {
        "slug": "res_vpc_customer_gateway",
        "displayName": "Res Vpc Customer Gateway",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Customer-Gateway_48.svg"
      },
      {
        "slug": "res_vpc_elastic_network_adapter",
        "displayName": "Res Vpc Elastic Network Adapter",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Elastic-Network-Adapter_48.svg"
      },
      {
        "slug": "res_vpc_elastic_network_interface",
        "displayName": "Res Vpc Elastic Network Interface",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Elastic-Network-Interface_48.svg"
      },
      {
        "slug": "res_vpc_endpoints",
        "displayName": "Res Vpc Endpoints",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Endpoints_48.svg"
      },
      {
        "slug": "res_vpc_flow_logs",
        "displayName": "Res Vpc Flow Logs",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Flow-Logs_48.svg"
      },
      {
        "slug": "res_vpc_internet_gateway",
        "displayName": "Res Vpc Internet Gateway",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Internet-Gateway_48.svg"
      },
      {
        "slug": "res_vpc_nat_gateway",
        "displayName": "Res Vpc Nat Gateway",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_NAT-Gateway_48.svg"
      },
      {
        "slug": "res_vpc_network_access_analyzer",
        "displayName": "Res Vpc Network Access Analyzer",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Network-Access-Analyzer_48.svg"
      },
      {
        "slug": "res_vpc_network_access_control_list",
        "displayName": "Res Vpc Network Access Control List",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Network-Access-Control-List_48.svg"
      },
      {
        "slug": "res_vpc_peering_connection",
        "displayName": "Res Vpc Peering Connection",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Peering-Connection_48.svg"
      },
      {
        "slug": "res_vpc_reachability_analyzer",
        "displayName": "Res Vpc Reachability Analyzer",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Reachability-Analyzer_48.svg"
      },
      {
        "slug": "res_vpc_router",
        "displayName": "Res Vpc Router",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Router_48.svg"
      },
      {
        "slug": "res_vpc_traffic_mirroring",
        "displayName": "Res Vpc Traffic Mirroring",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Traffic-Mirroring_48.svg"
      },
      {
        "slug": "res_vpc_virtual_private_cloud_vpc",
        "displayName": "Res Vpc Virtual Private Cloud Vpc",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Virtual-private-cloud-VPC_48.svg"
      },
      {
        "slug": "res_vpc_vpn_connection",
        "displayName": "Res Vpc Vpn Connection",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_VPN-Connection_48.svg"
      },
      {
        "slug": "res_vpc_vpn_gateway",
        "displayName": "Res Vpc Vpn Gateway",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_VPN-Gateway_48.svg"
      },
      {
        "slug": "cloudfront",
        "displayName": "Cloudfront",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_Amazon-CloudFront_64.svg"
      },
      {
        "slug": "route_53",
        "displayName": "Route 53",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_Amazon-Route-53_64.svg"
      },
      {
        "slug": "virtual_private_cloud",
        "displayName": "Virtual Private Cloud",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_Amazon-Virtual-Private-Cloud_64.svg"
      },
      {
        "slug": "vpc_lattice",
        "displayName": "Vpc Lattice",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_Amazon-VPC-Lattice_64.svg"
      },
      {
        "slug": "app_mesh",
        "displayName": "App Mesh",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-App-Mesh_64.svg"
      },
      {
        "slug": "client_vpn",
        "displayName": "Client Vpn",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Client-VPN_64.svg"
      },
      {
        "slug": "cloud_map",
        "displayName": "Cloud Map",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Cloud-Map_64.svg"
      },
      {
        "slug": "cloud_wan",
        "displayName": "Cloud Wan",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Cloud-WAN_64.svg"
      },
      {
        "slug": "direct_connect",
        "displayName": "Direct Connect",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Direct-Connect_64.svg"
      },
      {
        "slug": "global_accelerator",
        "displayName": "Global Accelerator",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Global-Accelerator_64.svg"
      },
      {
        "slug": "private_5g",
        "displayName": "Private 5g",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Private-5G_64.svg"
      },
      {
        "slug": "privatelink",
        "displayName": "Privatelink",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-PrivateLink_64.svg"
      },
      {
        "slug": "site_to_site_vpn",
        "displayName": "Site To Site Vpn",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Site-to-Site-VPN_64.svg"
      },
      {
        "slug": "transit_gateway",
        "displayName": "Transit Gateway",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Transit-Gateway_64.svg"
      },
      {
        "slug": "verified_access",
        "displayName": "Verified Access",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Verified-Access_64.svg"
      },
      {
        "slug": "elastic_load_balancing",
        "displayName": "Elastic Load Balancing",
        "category": "Networking & Content Delivery",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_Elastic-Load-Balancing_64.svg"
      }
    ],
    "Migration & Transfer": [
      {
        "slug": "res_application_discovery_service_aws_agentless_collector",
        "displayName": "Res Application Discovery Service Aws Agentless Collector",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Application-Discovery-Service_AWS-Agentless-Collector_48.svg"
      },
      {
        "slug": "res_application_discovery_service_aws_discovery_agent",
        "displayName": "Res Application Discovery Service Aws Discovery Agent",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Application-Discovery-Service_AWS-Discovery-Agent_48.svg"
      },
      {
        "slug": "res_application_discovery_service_migration_evaluator_collector",
        "displayName": "Res Application Discovery Service Migration Evaluator Collector",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Application-Discovery-Service_Migration-Evaluator-Collector_48.svg"
      },
      {
        "slug": "res_datasync_agent",
        "displayName": "Res Datasync Agent",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Datasync_Agent_48.svg"
      },
      {
        "slug": "res_datasync_discovery",
        "displayName": "Res Datasync Discovery",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-DataSync_Discovery_48.svg"
      },
      {
        "slug": "res_mainframe_modernization_analyzer",
        "displayName": "Res Mainframe Modernization Analyzer",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Mainframe-Modernization_Analyzer_48.svg"
      },
      {
        "slug": "res_mainframe_modernization_compiler",
        "displayName": "Res Mainframe Modernization Compiler",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Mainframe-Modernization_Compiler_48.svg"
      },
      {
        "slug": "res_mainframe_modernization_converter",
        "displayName": "Res Mainframe Modernization Converter",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Mainframe-Modernization_Converter_48.svg"
      },
      {
        "slug": "res_mainframe_modernization_developer",
        "displayName": "Res Mainframe Modernization Developer",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Mainframe-Modernization_Developer_48.svg"
      },
      {
        "slug": "res_mainframe_modernization_runtime",
        "displayName": "Res Mainframe Modernization Runtime",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Mainframe-Modernization_Runtime_48.svg"
      },
      {
        "slug": "res_migration_hub_refactor_spaces_applications",
        "displayName": "Res Migration Hub Refactor Spaces Applications",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Migration-Hub_Refactor-Spaces-Applications_48.svg"
      },
      {
        "slug": "res_migration_hub_refactor_spaces_environments",
        "displayName": "Res Migration Hub Refactor Spaces Environments",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Migration-Hub_Refactor-Spaces-Environments_48.svg"
      },
      {
        "slug": "res_migration_hub_refactor_spaces_services",
        "displayName": "Res Migration Hub Refactor Spaces Services",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Migration-Hub_Refactor-Spaces-Services_48.svg"
      },
      {
        "slug": "res_transfer_family_aws_as2",
        "displayName": "Res Transfer Family Aws As2",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Transfer-Family_AWS-AS2_48.svg"
      },
      {
        "slug": "res_transfer_family_aws_ftp",
        "displayName": "Res Transfer Family Aws Ftp",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Transfer-Family_AWS-FTP_48.svg"
      },
      {
        "slug": "res_transfer_family_aws_ftps",
        "displayName": "Res Transfer Family Aws Ftps",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Transfer-Family_AWS-FTPS_48.svg"
      },
      {
        "slug": "res_transfer_family_aws_sftp",
        "displayName": "Res Transfer Family Aws Sftp",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Transfer-Family_AWS-SFTP_48.svg"
      },
      {
        "slug": "application_discovery_service",
        "displayName": "Application Discovery Service",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-Application-Discovery-Service_64.svg"
      },
      {
        "slug": "application_migration_service",
        "displayName": "Application Migration Service",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-Application-Migration-Service_64.svg"
      },
      {
        "slug": "datasync",
        "displayName": "Datasync",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-DataSync_64.svg"
      },
      {
        "slug": "mainframe_modernization",
        "displayName": "Mainframe Modernization",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-Mainframe-Modernization_64.svg"
      },
      {
        "slug": "migration_evaluator",
        "displayName": "Migration Evaluator",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-Migration-Evaluator_64.svg"
      },
      {
        "slug": "migration_hub",
        "displayName": "Migration Hub",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-Migration-Hub_64.svg"
      },
      {
        "slug": "transfer_family",
        "displayName": "Transfer Family",
        "category": "Migration & Transfer",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-Transfer-Family_64.svg"
      }
    ],
    "Analytics": [
      {
        "slug": "res_athena_data_source_connectors",
        "displayName": "Res Athena Data Source Connectors",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Athena_Data-Source-Connectors_48.svg"
      },
      {
        "slug": "res_cloudsearch_search_documents",
        "displayName": "Res Cloudsearch Search Documents",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-CloudSearch_Search-Documents_48.svg"
      },
      {
        "slug": "res_data_exchange_for_apis",
        "displayName": "Res Data Exchange For Apis",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_AWS-Data-Exchange-for-APIs_48.svg"
      },
      {
        "slug": "res_datazone_business_data_catalog",
        "displayName": "Res Datazone Business Data Catalog",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-DataZone_Business-Data-Catalog_48.svg"
      },
      {
        "slug": "res_datazone_data_portal",
        "displayName": "Res Datazone Data Portal",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-DataZone_Data-Portal_48.svg"
      },
      {
        "slug": "res_datazone_data_projects",
        "displayName": "Res Datazone Data Projects",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-DataZone_Data-Projects_48.svg"
      },
      {
        "slug": "res_emr_cluster",
        "displayName": "Res Emr Cluster",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-EMR_Cluster_48.svg"
      },
      {
        "slug": "res_emr_emr_engine",
        "displayName": "Res Emr Emr Engine",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-EMR_EMR-Engine_48.svg"
      },
      {
        "slug": "res_emr_hdfs_cluster",
        "displayName": "Res Emr Hdfs Cluster",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-EMR_HDFS-Cluster_48.svg"
      },
      {
        "slug": "res_glue_aws_glue_for_ray",
        "displayName": "Res Glue Aws Glue For Ray",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_AWS-Glue_AWS-Glue-for-Ray_48.svg"
      },
      {
        "slug": "res_glue_crawler",
        "displayName": "Res Glue Crawler",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_AWS-Glue_Crawler_48.svg"
      },
      {
        "slug": "res_glue_data_catalog",
        "displayName": "Res Glue Data Catalog",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_AWS-Glue_Data-Catalog_48.svg"
      },
      {
        "slug": "res_glue_data_quality",
        "displayName": "Res Glue Data Quality",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_AWS-Glue_Data-Quality_48.svg"
      },
      {
        "slug": "res_lake_formation_data_lake",
        "displayName": "Res Lake Formation Data Lake",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_AWS-Lake-Formation_Data-Lake_48.svg"
      },
      {
        "slug": "res_msk_amazon_msk_connect",
        "displayName": "Res Msk Amazon Msk Connect",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-MSK_Amazon-MSK-Connect_48.svg"
      },
      {
        "slug": "res_opensearch_service_cluster_administrator_node",
        "displayName": "Res Opensearch Service Cluster Administrator Node",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_Cluster-Administrator-Node_48.svg"
      },
      {
        "slug": "res_opensearch_service_data_node",
        "displayName": "Res Opensearch Service Data Node",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_Data-Node_48.svg"
      },
      {
        "slug": "res_opensearch_service_index",
        "displayName": "Res Opensearch Service Index",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_Index_48.svg"
      },
      {
        "slug": "res_opensearch_service_observability",
        "displayName": "Res Opensearch Service Observability",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_Observability_48.svg"
      },
      {
        "slug": "res_opensearch_service_opensearch_dashboards",
        "displayName": "Res Opensearch Service Opensearch Dashboards",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_OpenSearch-Dashboards_48.svg"
      },
      {
        "slug": "res_opensearch_service_opensearch_ingestion",
        "displayName": "Res Opensearch Service Opensearch Ingestion",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_OpenSearch-Ingestion_48.svg"
      },
      {
        "slug": "res_opensearch_service_traces",
        "displayName": "Res Opensearch Service Traces",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_Traces_48.svg"
      },
      {
        "slug": "res_opensearch_service_ultrawarm_node",
        "displayName": "Res Opensearch Service Ultrawarm Node",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_UltraWarm-Node_48.svg"
      },
      {
        "slug": "res_quicksight_paginated_reports",
        "displayName": "Res Quicksight Paginated Reports",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Quicksight_Paginated-Reports_48.svg"
      },
      {
        "slug": "res_redshift_auto_copy",
        "displayName": "Res Redshift Auto Copy",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_Auto-copy_48.svg"
      },
      {
        "slug": "res_redshift_data_sharing_governance",
        "displayName": "Res Redshift Data Sharing Governance",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_Data-Sharing-Governance_48.svg"
      },
      {
        "slug": "res_redshift_dense_compute_node",
        "displayName": "Res Redshift Dense Compute Node",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_Dense-Compute-Node_48.svg"
      },
      {
        "slug": "res_redshift_dense_storage_node",
        "displayName": "Res Redshift Dense Storage Node",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_Dense-Storage-Node_48.svg"
      },
      {
        "slug": "res_redshift_ml",
        "displayName": "Res Redshift Ml",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_ML_48.svg"
      },
      {
        "slug": "res_redshift_query_editor_v2.0",
        "displayName": "Res Redshift Query Editor V2.0",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_Query-Editor-v2.0_48.svg"
      },
      {
        "slug": "res_redshift_ra3",
        "displayName": "Res Redshift Ra3",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_RA3_48.svg"
      },
      {
        "slug": "res_redshift_streaming_ingestion",
        "displayName": "Res Redshift Streaming Ingestion",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_Streaming-Ingestion_48.svg"
      },
      {
        "slug": "athena",
        "displayName": "Athena",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Athena_64.svg"
      },
      {
        "slug": "cloudsearch",
        "displayName": "Cloudsearch",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-CloudSearch_64.svg"
      },
      {
        "slug": "datazone",
        "displayName": "Datazone",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-DataZone_64.svg"
      },
      {
        "slug": "emr",
        "displayName": "Emr",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-EMR_64.svg"
      },
      {
        "slug": "finspace",
        "displayName": "Finspace",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-FinSpace_64.svg"
      },
      {
        "slug": "kinesis",
        "displayName": "Kinesis",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Kinesis_64.svg"
      },
      {
        "slug": "kinesis_data_firehose",
        "displayName": "Kinesis Data Firehose",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Kinesis-Data-Firehose_64.svg"
      },
      {
        "slug": "kinesis_data_streams",
        "displayName": "Kinesis Data Streams",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Kinesis-Data-Streams_64.svg"
      },
      {
        "slug": "kinesis_video_streams",
        "displayName": "Kinesis Video Streams",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Kinesis-Video-Streams_64.svg"
      },
      {
        "slug": "managed_service_for_apache_flink",
        "displayName": "Managed Service For Apache Flink",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Managed-Service-for-Apache-Flink_64.svg"
      },
      {
        "slug": "managed_streaming_for_apache_kafka",
        "displayName": "Managed Streaming For Apache Kafka",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Managed-Streaming-for-Apache-Kafka_64.svg"
      },
      {
        "slug": "opensearch_service",
        "displayName": "Opensearch Service",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-OpenSearch-Service_64.svg"
      },
      {
        "slug": "quicksight",
        "displayName": "Quicksight",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-QuickSight_64.svg"
      },
      {
        "slug": "redshift",
        "displayName": "Redshift",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Redshift_64.svg"
      },
      {
        "slug": "clean_rooms",
        "displayName": "Clean Rooms",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Clean-Rooms_64.svg"
      },
      {
        "slug": "data_exchange",
        "displayName": "Data Exchange",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Data-Exchange_64.svg"
      },
      {
        "slug": "data_pipeline",
        "displayName": "Data Pipeline",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Data-Pipeline_64.svg"
      },
      {
        "slug": "entity_resolution",
        "displayName": "Entity Resolution",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Entity-Resolution_64.svg"
      },
      {
        "slug": "glue",
        "displayName": "Glue",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Glue_64.svg"
      },
      {
        "slug": "glue_databrew",
        "displayName": "Glue Databrew",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Glue-DataBrew_64.svg"
      },
      {
        "slug": "glue_elastic_views",
        "displayName": "Glue Elastic Views",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Glue-Elastic-Views_64.svg"
      },
      {
        "slug": "lake_formation",
        "displayName": "Lake Formation",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Lake-Formation_64.svg"
      }
    ],
    "Database": [
      {
        "slug": "res_aurora_amazon_aurora_instance_alternate",
        "displayName": "Res Aurora Amazon Aurora Instance Alternate",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora_Amazon-Aurora-Instance-alternate_48.svg"
      },
      {
        "slug": "res_aurora_amazon_rds_instance",
        "displayName": "Res Aurora Amazon Rds Instance",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora_Amazon-RDS-Instance_48.svg"
      },
      {
        "slug": "res_aurora_amazon_rds_instance_aternate",
        "displayName": "Res Aurora Amazon Rds Instance Aternate",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora_Amazon-RDS-Instance-Aternate_48.svg"
      },
      {
        "slug": "res_aurora_instance",
        "displayName": "Res Aurora Instance",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-Instance_48.svg"
      },
      {
        "slug": "res_aurora_mariadb_instance",
        "displayName": "Res Aurora Mariadb Instance",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-MariaDB-Instance_48.svg"
      },
      {
        "slug": "res_aurora_mariadb_instance_alternate",
        "displayName": "Res Aurora Mariadb Instance Alternate",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-MariaDB-Instance-Alternate_48.svg"
      },
      {
        "slug": "res_aurora_mysql_instance",
        "displayName": "Res Aurora Mysql Instance",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-MySQL-Instance_48.svg"
      },
      {
        "slug": "res_aurora_mysql_instance_alternate",
        "displayName": "Res Aurora Mysql Instance Alternate",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-MySQL-Instance-Alternate_48.svg"
      },
      {
        "slug": "res_aurora_oracle_instance",
        "displayName": "Res Aurora Oracle Instance",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-Oracle-Instance_48.svg"
      },
      {
        "slug": "res_aurora_oracle_instance_alternate",
        "displayName": "Res Aurora Oracle Instance Alternate",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-Oracle-Instance-Alternate_48.svg"
      },
      {
        "slug": "res_aurora_piops_instance",
        "displayName": "Res Aurora Piops Instance",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-PIOPS-Instance_48.svg"
      },
      {
        "slug": "res_aurora_postgresql_instance",
        "displayName": "Res Aurora Postgresql Instance",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-PostgreSQL-Instance_48.svg"
      },
      {
        "slug": "res_aurora_postgresql_instance_alternate",
        "displayName": "Res Aurora Postgresql Instance Alternate",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-PostgreSQL-Instance-Alternate_48.svg"
      },
      {
        "slug": "res_aurora_sql_server_instance",
        "displayName": "Res Aurora Sql Server Instance",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-SQL-Server-Instance_48.svg"
      },
      {
        "slug": "res_aurora_sql_server_instance_alternate",
        "displayName": "Res Aurora Sql Server Instance Alternate",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-SQL-Server-Instance-Alternate_48.svg"
      },
      {
        "slug": "res_aurora_trusted_language_extensions_for_postgresql",
        "displayName": "Res Aurora Trusted Language Extensions For Postgresql",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora_Trusted-Language-Extensions-for-PostgreSQL_48.svg"
      },
      {
        "slug": "res_database_migration_service_database_migration_workflow_or_job",
        "displayName": "Res Database Migration Service Database Migration Workflow Or Job",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_AWS-Database-Migration-Service_Database-migration-workflow-or-job_48.svg"
      },
      {
        "slug": "res_documentdb_elastic_clusters",
        "displayName": "Res Documentdb Elastic Clusters",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DocumentDB_Elastic-Clusters_48.svg"
      },
      {
        "slug": "res_dynamodb_amazon_dynamodb_accelerator",
        "displayName": "Res Dynamodb Amazon Dynamodb Accelerator",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Amazon-DynamoDB-Accelerator_48.svg"
      },
      {
        "slug": "res_dynamodb_attribute",
        "displayName": "Res Dynamodb Attribute",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Attribute_48.svg"
      },
      {
        "slug": "res_dynamodb_attributes",
        "displayName": "Res Dynamodb Attributes",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Attributes_48.svg"
      },
      {
        "slug": "res_dynamodb_global_secondary_index",
        "displayName": "Res Dynamodb Global Secondary Index",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Global-secondary-index_48.svg"
      },
      {
        "slug": "res_dynamodb_item",
        "displayName": "Res Dynamodb Item",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Item_48.svg"
      },
      {
        "slug": "res_dynamodb_items",
        "displayName": "Res Dynamodb Items",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Items_48.svg"
      },
      {
        "slug": "res_dynamodb_standard_access_table_class",
        "displayName": "Res Dynamodb Standard Access Table Class",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Standard-Access-Table-Class_48.svg"
      },
      {
        "slug": "res_dynamodb_standard_infrequent_access_table_class",
        "displayName": "Res Dynamodb Standard Infrequent Access Table Class",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Standard-Infrequent-Access-Table-Class_48.svg"
      },
      {
        "slug": "res_dynamodb_stream",
        "displayName": "Res Dynamodb Stream",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Stream_48.svg"
      },
      {
        "slug": "res_dynamodb_table",
        "displayName": "Res Dynamodb Table",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Table_48.svg"
      },
      {
        "slug": "res_elasticache_cache_node",
        "displayName": "Res Elasticache Cache Node",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-ElastiCache_Cache-Node_48.svg"
      },
      {
        "slug": "res_elasticache_elasticache_for_memcached",
        "displayName": "Res Elasticache Elasticache For Memcached",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-ElastiCache_ElastiCache-for-Memcached_48.svg"
      },
      {
        "slug": "res_elasticache_elasticache_for_redis",
        "displayName": "Res Elasticache Elasticache For Redis",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-ElastiCache_ElastiCache-for-Redis_48.svg"
      },
      {
        "slug": "res_rds_blue_green_deployments",
        "displayName": "Res Rds Blue Green Deployments",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS_Blue-Green-Deployments_48.svg"
      },
      {
        "slug": "res_rds_multi_az",
        "displayName": "Res Rds Multi Az",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS_Multi-AZ_48.svg"
      },
      {
        "slug": "res_rds_multi_az_db_cluster",
        "displayName": "Res Rds Multi Az Db Cluster",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS_Multi-AZ-DB-Cluster_48.svg"
      },
      {
        "slug": "res_rds_optimized_writes",
        "displayName": "Res Rds Optimized Writes",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS_Optimized-Writes_48.svg"
      },
      {
        "slug": "res_rds_proxy_instance",
        "displayName": "Res Rds Proxy Instance",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS-Proxy-Instance_48.svg"
      },
      {
        "slug": "res_rds_proxy_instance_alternate",
        "displayName": "Res Rds Proxy Instance Alternate",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS-Proxy-Instance-Alternate_48.svg"
      },
      {
        "slug": "res_rds_trusted_language_extensions_for_postgresql",
        "displayName": "Res Rds Trusted Language Extensions For Postgresql",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS_Trusted-Language-Extensions-for-PostgreSQL_48.svg"
      },
      {
        "slug": "aurora",
        "displayName": "Aurora",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-Aurora_64.svg"
      },
      {
        "slug": "documentdb",
        "displayName": "Documentdb",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-DocumentDB_64.svg"
      },
      {
        "slug": "dynamodb",
        "displayName": "Dynamodb",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-DynamoDB_64.svg"
      },
      {
        "slug": "elasticache",
        "displayName": "Elasticache",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-ElastiCache_64.svg"
      },
      {
        "slug": "keyspaces",
        "displayName": "Keyspaces",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-Keyspaces_64.svg"
      },
      {
        "slug": "memorydb_for_redis",
        "displayName": "Memorydb For Redis",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-MemoryDB-for-Redis_64.svg"
      },
      {
        "slug": "neptune",
        "displayName": "Neptune",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-Neptune_64.svg"
      },
      {
        "slug": "rds",
        "displayName": "Rds",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-RDS_64.svg"
      },
      {
        "slug": "rds_on_vmware",
        "displayName": "Rds On Vmware",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-RDS-on-VMware_64.svg"
      },
      {
        "slug": "timestream",
        "displayName": "Timestream",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-Timestream_64.svg"
      },
      {
        "slug": "database_migration_service",
        "displayName": "Database Migration Service",
        "category": "Database",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_AWS-Database-Migration-Service_64.svg"
      }
    ],
    "Storage": [
      {
        "slug": "res_backup_audit_manager",
        "displayName": "Res Backup Audit Manager",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Audit-Manager_48.svg"
      },
      {
        "slug": "res_backup_aws_backup_for_aws_cloudformation",
        "displayName": "Res Backup Aws Backup For Aws Cloudformation",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_AWS-Backup-for-AWS-CloudFormation_48.svg"
      },
      {
        "slug": "res_backup_aws_backup_support_for_amazon_fsx_for_netapp_ontap",
        "displayName": "Res Backup Aws Backup Support For Amazon Fsx For Netapp Ontap",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_AWS-Backup-support-for-Amazon-FSx-for-NetApp-ONTAP_48.svg"
      },
      {
        "slug": "res_backup_aws_backup_support_for_amazon_s3",
        "displayName": "Res Backup Aws Backup Support For Amazon S3",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_AWS-Backup-support-for-Amazon-S3_48.svg"
      },
      {
        "slug": "res_backup_aws_backup_support_for_vmware_workloads",
        "displayName": "Res Backup Aws Backup Support For Vmware Workloads",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_AWS-Backup-Support-for-VMware-Workloads_48.svg"
      },
      {
        "slug": "res_backup_backup_plan",
        "displayName": "Res Backup Backup Plan",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Backup-Plan_48.svg"
      },
      {
        "slug": "res_backup_backup_restore",
        "displayName": "Res Backup Backup Restore",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Backup-Restore_48.svg"
      },
      {
        "slug": "res_backup_backup_vault",
        "displayName": "Res Backup Backup Vault",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Backup-Vault_48.svg"
      },
      {
        "slug": "res_backup_compliance_reporting",
        "displayName": "Res Backup Compliance Reporting",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Compliance-Reporting_48.svg"
      },
      {
        "slug": "res_backup_compute",
        "displayName": "Res Backup Compute",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Compute_48.svg"
      },
      {
        "slug": "res_backup_database",
        "displayName": "Res Backup Database",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Database_48.svg"
      },
      {
        "slug": "res_backup_gateway",
        "displayName": "Res Backup Gateway",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Gateway_48.svg"
      },
      {
        "slug": "res_backup_legal_hold",
        "displayName": "Res Backup Legal Hold",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Legal-Hold_48.svg"
      },
      {
        "slug": "res_backup_recovery_point_objective",
        "displayName": "Res Backup Recovery Point Objective",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Recovery-Point-Objective_48.svg"
      },
      {
        "slug": "res_backup_recovery_time_objective",
        "displayName": "Res Backup Recovery Time Objective",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Recovery-Time-Objective_48.svg"
      },
      {
        "slug": "res_backup_storage",
        "displayName": "Res Backup Storage",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Storage_48.svg"
      },
      {
        "slug": "res_backup_vault_lock",
        "displayName": "Res Backup Vault Lock",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Vault-Lock_48.svg"
      },
      {
        "slug": "res_backup_virtual_machine",
        "displayName": "Res Backup Virtual Machine",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Virtual-Machine_48.svg"
      },
      {
        "slug": "res_backup_virtual_machine_monitor",
        "displayName": "Res Backup Virtual Machine Monitor",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Virtual-Machine-Monitor_48.svg"
      },
      {
        "slug": "res_elastic_block_store_amazon_data_lifecycle_manager",
        "displayName": "Res Elastic Block Store Amazon Data Lifecycle Manager",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-Block-Store_Amazon-Data-Lifecycle-Manager_48.svg"
      },
      {
        "slug": "res_elastic_block_store_multiple_volumes",
        "displayName": "Res Elastic Block Store Multiple Volumes",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-Block-Store_Multiple-Volumes_48.svg"
      },
      {
        "slug": "res_elastic_block_store_snapshot",
        "displayName": "Res Elastic Block Store Snapshot",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-Block-Store_Snapshot_48.svg"
      },
      {
        "slug": "res_elastic_block_store_volume",
        "displayName": "Res Elastic Block Store Volume",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-Block-Store_Volume_48.svg"
      },
      {
        "slug": "res_elastic_block_store_volume_gp3",
        "displayName": "Res Elastic Block Store Volume Gp3",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-Block-Store_Volume-gp3_48.svg"
      },
      {
        "slug": "res_elastic_file_system_efs_intelligent_tiering",
        "displayName": "Res Elastic File System Efs Intelligent Tiering",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_EFS-Intelligent-Tiering_48.svg"
      },
      {
        "slug": "res_elastic_file_system_efs_one_zone",
        "displayName": "Res Elastic File System Efs One Zone",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_EFS-One-Zone_48.svg"
      },
      {
        "slug": "res_elastic_file_system_efs_one_zone_infrequent_access",
        "displayName": "Res Elastic File System Efs One Zone Infrequent Access",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_EFS-One-Zone-Infrequent-Access_48.svg"
      },
      {
        "slug": "res_elastic_file_system_efs_standard",
        "displayName": "Res Elastic File System Efs Standard",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_EFS-Standard_48.svg"
      },
      {
        "slug": "res_elastic_file_system_efs_standard_infrequent_access",
        "displayName": "Res Elastic File System Efs Standard Infrequent Access",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_EFS-Standard-Infrequent-Access_48.svg"
      },
      {
        "slug": "res_elastic_file_system_elastic_throughput",
        "displayName": "Res Elastic File System Elastic Throughput",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_Elastic-Throughput_48.svg"
      },
      {
        "slug": "res_elastic_file_system_file_system",
        "displayName": "Res Elastic File System File System",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_File-System_48.svg"
      },
      {
        "slug": "res_file_cache_hybrid_nfs_linked_datasets",
        "displayName": "Res File Cache Hybrid Nfs Linked Datasets",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-File-Cache_Hybrid-NFS-linked-datasets_48.svg"
      },
      {
        "slug": "res_file_cache_on_premises_nfs_linked_datasets",
        "displayName": "Res File Cache On Premises Nfs Linked Datasets",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-File-Cache_On-premises-NFS-linked-datasets_48.svg"
      },
      {
        "slug": "res_file_cache_s3_linked_datasets",
        "displayName": "Res File Cache S3 Linked Datasets",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-File-Cache_S3-linked-datasets_48.svg"
      },
      {
        "slug": "res_simple_storage_service_bucket",
        "displayName": "Res Simple Storage Service Bucket",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_Bucket_48.svg"
      },
      {
        "slug": "res_simple_storage_service_bucket_with_objects",
        "displayName": "Res Simple Storage Service Bucket With Objects",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_Bucket-With-Objects_48.svg"
      },
      {
        "slug": "res_simple_storage_service_general_access_points",
        "displayName": "Res Simple Storage Service General Access Points",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_General-Access-Points_48.svg"
      },
      {
        "slug": "res_simple_storage_service_glacier_archive",
        "displayName": "Res Simple Storage Service Glacier Archive",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service-Glacier_Archive_48.svg"
      },
      {
        "slug": "res_simple_storage_service_glacier_vault",
        "displayName": "Res Simple Storage Service Glacier Vault",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service-Glacier_Vault_48.svg"
      },
      {
        "slug": "res_simple_storage_service_object",
        "displayName": "Res Simple Storage Service Object",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_Object_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_batch_operations",
        "displayName": "Res Simple Storage Service S3 Batch Operations",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Batch-Operations_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_glacier_deep_archive",
        "displayName": "Res Simple Storage Service S3 Glacier Deep Archive",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Glacier-Deep-Archive_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_glacier_flexible_retrieval",
        "displayName": "Res Simple Storage Service S3 Glacier Flexible Retrieval",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Glacier-Flexible-Retrieval_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_glacier_instant_retrieval",
        "displayName": "Res Simple Storage Service S3 Glacier Instant Retrieval",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Glacier-Instant-Retrieval_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_intelligent_tiering",
        "displayName": "Res Simple Storage Service S3 Intelligent Tiering",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Intelligent-Tiering_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_multi_region_access_points",
        "displayName": "Res Simple Storage Service S3 Multi Region Access Points",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Multi-Region-Access-Points_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_object_lambda",
        "displayName": "Res Simple Storage Service S3 Object Lambda",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Object-Lambda_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_object_lambda_access_points",
        "displayName": "Res Simple Storage Service S3 Object Lambda Access Points",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Object-Lambda-Access-Points_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_object_lock",
        "displayName": "Res Simple Storage Service S3 Object Lock",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Object-Lock_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_on_outposts",
        "displayName": "Res Simple Storage Service S3 On Outposts",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-On-Outposts_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_one_zone_ia",
        "displayName": "Res Simple Storage Service S3 One Zone Ia",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-One-Zone-IA_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_replication",
        "displayName": "Res Simple Storage Service S3 Replication",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Replication_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_replication_time_control",
        "displayName": "Res Simple Storage Service S3 Replication Time Control",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Replication-Time-Control_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_select",
        "displayName": "Res Simple Storage Service S3 Select",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Select_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_standard",
        "displayName": "Res Simple Storage Service S3 Standard",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Standard_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_standard_ia",
        "displayName": "Res Simple Storage Service S3 Standard Ia",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Standard-IA_48.svg"
      },
      {
        "slug": "res_simple_storage_service_s3_storage_lens",
        "displayName": "Res Simple Storage Service S3 Storage Lens",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Storage-Lens_48.svg"
      },
      {
        "slug": "res_simple_storage_service_vpc_access_points",
        "displayName": "Res Simple Storage Service Vpc Access Points",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_VPC-Access-Points_48.svg"
      },
      {
        "slug": "res_snowball_snowball_import_export",
        "displayName": "Res Snowball Snowball Import Export",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Snowball_Snowball-Import-Export_48.svg"
      },
      {
        "slug": "res_storage_gateway_amazon_fsx_file_gateway",
        "displayName": "Res Storage Gateway Amazon Fsx File Gateway",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Amazon-FSx-File-Gateway_48.svg"
      },
      {
        "slug": "res_storage_gateway_amazon_s3_file_gateway",
        "displayName": "Res Storage Gateway Amazon S3 File Gateway",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Amazon-S3-File-Gateway_48.svg"
      },
      {
        "slug": "res_storage_gateway_cached_volume",
        "displayName": "Res Storage Gateway Cached Volume",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Cached-Volume_48.svg"
      },
      {
        "slug": "res_storage_gateway_file_gateway",
        "displayName": "Res Storage Gateway File Gateway",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_File-Gateway_48.svg"
      },
      {
        "slug": "res_storage_gateway_noncached_volume",
        "displayName": "Res Storage Gateway Noncached Volume",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Noncached-Volume_48.svg"
      },
      {
        "slug": "res_storage_gateway_tape_gateway",
        "displayName": "Res Storage Gateway Tape Gateway",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Tape-Gateway_48.svg"
      },
      {
        "slug": "res_storage_gateway_virtual_tape_library",
        "displayName": "Res Storage Gateway Virtual Tape Library",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Virtual-Tape-Library_48.svg"
      },
      {
        "slug": "res_storage_gateway_volume_gateway",
        "displayName": "Res Storage Gateway Volume Gateway",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Volume-Gateway_48.svg"
      },
      {
        "slug": "efs",
        "displayName": "Efs",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-EFS_64.svg"
      },
      {
        "slug": "elastic_block_store",
        "displayName": "Elastic Block Store",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-Elastic-Block-Store_64.svg"
      },
      {
        "slug": "file_cache",
        "displayName": "File Cache",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-File-Cache_64.svg"
      },
      {
        "slug": "fsx",
        "displayName": "Fsx",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-FSx_64.svg"
      },
      {
        "slug": "fsx_for_lustre",
        "displayName": "Fsx For Lustre",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-FSx-for-Lustre_64.svg"
      },
      {
        "slug": "fsx_for_netapp_ontap",
        "displayName": "Fsx For Netapp Ontap",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-FSx-for-NetApp-ONTAP_64.svg"
      },
      {
        "slug": "fsx_for_openzfs",
        "displayName": "Fsx For Openzfs",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-FSx-for-OpenZFS_64.svg"
      },
      {
        "slug": "fsx_for_wfs",
        "displayName": "Fsx For Wfs",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-FSx-for-WFS_64.svg"
      },
      {
        "slug": "s3_on_outposts",
        "displayName": "S3 On Outposts",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-S3-on-Outposts_64.svg"
      },
      {
        "slug": "simple_storage_service",
        "displayName": "Simple Storage Service",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-Simple-Storage-Service_64.svg"
      },
      {
        "slug": "simple_storage_service_glacier",
        "displayName": "Simple Storage Service Glacier",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-Simple-Storage-Service-Glacier_64.svg"
      },
      {
        "slug": "backup",
        "displayName": "Backup",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Backup_64.svg"
      },
      {
        "slug": "elastic_disaster_recovery",
        "displayName": "Elastic Disaster Recovery",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Elastic-Disaster-Recovery_64.svg"
      },
      {
        "slug": "snowball",
        "displayName": "Snowball",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Snowball_64.svg"
      },
      {
        "slug": "snowball_edge",
        "displayName": "Snowball Edge",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Snowball-Edge_64.svg"
      },
      {
        "slug": "snowcone",
        "displayName": "Snowcone",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Snowcone_64.svg"
      },
      {
        "slug": "snowmobile",
        "displayName": "Snowmobile",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Snowmobile_64.svg"
      },
      {
        "slug": "storage_gateway",
        "displayName": "Storage Gateway",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Storage-Gateway_64.svg"
      }
    ],
    "Quantum Technologies": [
      {
        "slug": "res_braket_chandelier",
        "displayName": "Res Braket Chandelier",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Chandelier_48.svg"
      },
      {
        "slug": "res_braket_chip",
        "displayName": "Res Braket Chip",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Chip_48.svg"
      },
      {
        "slug": "res_braket_embedded_simulator",
        "displayName": "Res Braket Embedded Simulator",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Embedded-Simulator_48.svg"
      },
      {
        "slug": "res_braket_managed_simulator",
        "displayName": "Res Braket Managed Simulator",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Managed-Simulator_48.svg"
      },
      {
        "slug": "res_braket_noise_simulator",
        "displayName": "Res Braket Noise Simulator",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Noise-Simulator_48.svg"
      },
      {
        "slug": "res_braket_qpu",
        "displayName": "Res Braket Qpu",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_QPU_48.svg"
      },
      {
        "slug": "res_braket_simulator",
        "displayName": "Res Braket Simulator",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Simulator_48.svg"
      },
      {
        "slug": "res_braket_simulator_1",
        "displayName": "Res Braket Simulator 1",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Simulator-1_48.svg"
      },
      {
        "slug": "res_braket_simulator_2",
        "displayName": "Res Braket Simulator 2",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Simulator-2_48.svg"
      },
      {
        "slug": "res_braket_simulator_3",
        "displayName": "Res Braket Simulator 3",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Simulator-3_48.svg"
      },
      {
        "slug": "res_braket_simulator_4",
        "displayName": "Res Braket Simulator 4",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Simulator-4_48.svg"
      },
      {
        "slug": "res_braket_state_vector",
        "displayName": "Res Braket State Vector",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_State-Vector_48.svg"
      },
      {
        "slug": "res_braket_tensor_network",
        "displayName": "Res Braket Tensor Network",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Tensor-Network_48.svg"
      },
      {
        "slug": "braket",
        "displayName": "Braket",
        "category": "Quantum Technologies",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Quantum-Technologies/64/Arch_Amazon-Braket_64.svg"
      }
    ],
    "Security, Identity & Compliance": [
      {
        "slug": "res_certificate_manager_certificate_authority",
        "displayName": "Res Certificate Manager Certificate Authority",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Certificate-Manager_Certificate-Authority_48.svg"
      },
      {
        "slug": "res_directory_service_ad_connector",
        "displayName": "Res Directory Service Ad Connector",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Directory-Service_AD-Connector_48.svg"
      },
      {
        "slug": "res_directory_service_aws_managed_microsoft_ad",
        "displayName": "Res Directory Service Aws Managed Microsoft Ad",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Directory-Service_AWS-Managed-Microsoft-AD_48.svg"
      },
      {
        "slug": "res_directory_service_simple_ad",
        "displayName": "Res Directory Service Simple Ad",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Directory-Service_Simple-AD_48.svg"
      },
      {
        "slug": "res_identity_access_management_add_on",
        "displayName": "Res Identity Access Management Add On",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Add-on_48.svg"
      },
      {
        "slug": "res_identity_access_management_aws_sts",
        "displayName": "Res Identity Access Management Aws Sts",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_AWS-STS_48.svg"
      },
      {
        "slug": "res_identity_access_management_aws_sts_alternate",
        "displayName": "Res Identity Access Management Aws Sts Alternate",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_AWS-STS-Alternate_48.svg"
      },
      {
        "slug": "res_identity_access_management_data_encryption_key",
        "displayName": "Res Identity Access Management Data Encryption Key",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Data-Encryption-Key_48.svg"
      },
      {
        "slug": "res_identity_access_management_encrypted_data",
        "displayName": "Res Identity Access Management Encrypted Data",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Encrypted-Data_48.svg"
      },
      {
        "slug": "res_identity_access_management_iam_access_analyzer",
        "displayName": "Res Identity Access Management Iam Access Analyzer",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_IAM-Access-Analyzer_48.svg"
      },
      {
        "slug": "res_identity_access_management_iam_roles_anywhere",
        "displayName": "Res Identity Access Management Iam Roles Anywhere",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_IAM-Roles-Anywhere_48.svg"
      },
      {
        "slug": "res_identity_access_management_long_term_security_credential",
        "displayName": "Res Identity Access Management Long Term Security Credential",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Long-Term-Security-Credential_48.svg"
      },
      {
        "slug": "res_identity_access_management_mfa_token",
        "displayName": "Res Identity Access Management Mfa Token",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_MFA-Token_48.svg"
      },
      {
        "slug": "res_identity_access_management_permissions",
        "displayName": "Res Identity Access Management Permissions",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Permissions_48.svg"
      },
      {
        "slug": "res_identity_access_management_role",
        "displayName": "Res Identity Access Management Role",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Role_48.svg"
      },
      {
        "slug": "res_identity_access_management_temporary_security_credential",
        "displayName": "Res Identity Access Management Temporary Security Credential",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Temporary-Security-Credential_48.svg"
      },
      {
        "slug": "res_inspector_agent",
        "displayName": "Res Inspector Agent",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_Amazon-Inspector_Agent_48.svg"
      },
      {
        "slug": "res_key_management_service_external_key_store",
        "displayName": "Res Key Management Service External Key Store",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Key-Management-Service_External-Key-Store_48.svg"
      },
      {
        "slug": "res_network_firewall_endpoints",
        "displayName": "Res Network Firewall Endpoints",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Network-Firewall_Endpoints_48.svg"
      },
      {
        "slug": "res_security_hub_finding",
        "displayName": "Res Security Hub Finding",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Security-Hub_Finding_48.svg"
      },
      {
        "slug": "res_shield_aws_shield_advanced",
        "displayName": "Res Shield Aws Shield Advanced",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Shield_AWS-Shield-Advanced_48.svg"
      },
      {
        "slug": "res_waf_bad_bot",
        "displayName": "Res Waf Bad Bot",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Bad-Bot_48.svg"
      },
      {
        "slug": "res_waf_bot",
        "displayName": "Res Waf Bot",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Bot_48.svg"
      },
      {
        "slug": "res_waf_bot_control",
        "displayName": "Res Waf Bot Control",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Bot-Control_48.svg"
      },
      {
        "slug": "res_waf_filtering_rule",
        "displayName": "Res Waf Filtering Rule",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Filtering-Rule_48.svg"
      },
      {
        "slug": "res_waf_labels",
        "displayName": "Res Waf Labels",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Labels_48.svg"
      },
      {
        "slug": "res_waf_managed_rule",
        "displayName": "Res Waf Managed Rule",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Managed-Rule_48.svg"
      },
      {
        "slug": "res_waf_rule",
        "displayName": "Res Waf Rule",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Rule_48.svg"
      },
      {
        "slug": "cloud_directory",
        "displayName": "Cloud Directory",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Cloud-Directory_64.svg"
      },
      {
        "slug": "cognito",
        "displayName": "Cognito",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Cognito_64.svg"
      },
      {
        "slug": "detective",
        "displayName": "Detective",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Detective_64.svg"
      },
      {
        "slug": "guardduty",
        "displayName": "Guardduty",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-GuardDuty_64.svg"
      },
      {
        "slug": "inspector",
        "displayName": "Inspector",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Inspector_64.svg"
      },
      {
        "slug": "macie",
        "displayName": "Macie",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Macie_64.svg"
      },
      {
        "slug": "security_lake",
        "displayName": "Security Lake",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Security-Lake_64.svg"
      },
      {
        "slug": "verified_permissions",
        "displayName": "Verified Permissions",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Verified-Permissions_64.svg"
      },
      {
        "slug": "artifact",
        "displayName": "Artifact",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Artifact_64.svg"
      },
      {
        "slug": "audit_manager",
        "displayName": "Audit Manager",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Audit-Manager_64.svg"
      },
      {
        "slug": "certificate_manager",
        "displayName": "Certificate Manager",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Certificate-Manager_64.svg"
      },
      {
        "slug": "cloudhsm",
        "displayName": "Cloudhsm",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-CloudHSM_64.svg"
      },
      {
        "slug": "directory_service",
        "displayName": "Directory Service",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Directory-Service_64.svg"
      },
      {
        "slug": "firewall_manager",
        "displayName": "Firewall Manager",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Firewall-Manager_64.svg"
      },
      {
        "slug": "iam_identity_center",
        "displayName": "Iam Identity Center",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-IAM-Identity-Center_64.svg"
      },
      {
        "slug": "identity_and_access_management",
        "displayName": "Identity And Access Management",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Identity-and-Access-Management_64.svg"
      },
      {
        "slug": "key_management_service",
        "displayName": "Key Management Service",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Key-Management-Service_64.svg"
      },
      {
        "slug": "network_firewall",
        "displayName": "Network Firewall",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Network-Firewall_64.svg"
      },
      {
        "slug": "payment_cryptography",
        "displayName": "Payment Cryptography",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Payment-Cryptography_64.svg"
      },
      {
        "slug": "private_certificate_authority",
        "displayName": "Private Certificate Authority",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Private-Certificate-Authority_64.svg"
      },
      {
        "slug": "resource_access_manager",
        "displayName": "Resource Access Manager",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Resource-Access-Manager_64.svg"
      },
      {
        "slug": "secrets_manager",
        "displayName": "Secrets Manager",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Secrets-Manager_64.svg"
      },
      {
        "slug": "security_hub",
        "displayName": "Security Hub",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Security-Hub_64.svg"
      },
      {
        "slug": "shield",
        "displayName": "Shield",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Shield_64.svg"
      },
      {
        "slug": "signer",
        "displayName": "Signer",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Signer_64.svg"
      },
      {
        "slug": "waf",
        "displayName": "Waf",
        "category": "Security, Identity & Compliance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-WAF_64.svg"
      }
    ],
    "Media Services": [
      {
        "slug": "res_cloud_digital_interface",
        "displayName": "Res Cloud Digital Interface",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Media-Services/Res_AWS-Cloud-Digital-Interface_48.svg"
      },
      {
        "slug": "res_elemental_mediaconnect_mediaconnect_gateway",
        "displayName": "Res Elemental Mediaconnect Mediaconnect Gateway",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Media-Services/Res_AWS-Elemental-MediaConnect_MediaConnect-Gateway_48.svg"
      },
      {
        "slug": "elastic_transcoder",
        "displayName": "Elastic Transcoder",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_Amazon-Elastic-Transcoder_64.svg"
      },
      {
        "slug": "interactive_video_service",
        "displayName": "Interactive Video Service",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_Amazon-Interactive-Video-Service_64.svg"
      },
      {
        "slug": "nimble_studio",
        "displayName": "Nimble Studio",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_Amazon-Nimble-Studio_64.svg"
      },
      {
        "slug": "elemental_appliances_&_software",
        "displayName": "Elemental Appliances & Software",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-Appliances-&-Software_64.svg"
      },
      {
        "slug": "elemental_conductor",
        "displayName": "Elemental Conductor",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-Conductor_64.svg"
      },
      {
        "slug": "elemental_delta",
        "displayName": "Elemental Delta",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-Delta_64.svg"
      },
      {
        "slug": "elemental_link",
        "displayName": "Elemental Link",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-Link_64.svg"
      },
      {
        "slug": "elemental_live",
        "displayName": "Elemental Live",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-Live_64.svg"
      },
      {
        "slug": "elemental_mediaconnect",
        "displayName": "Elemental Mediaconnect",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-MediaConnect_64.svg"
      },
      {
        "slug": "elemental_mediaconvert",
        "displayName": "Elemental Mediaconvert",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-MediaConvert_64.svg"
      },
      {
        "slug": "elemental_medialive",
        "displayName": "Elemental Medialive",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-MediaLive_64.svg"
      },
      {
        "slug": "elemental_mediapackage",
        "displayName": "Elemental Mediapackage",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-MediaPackage_64.svg"
      },
      {
        "slug": "elemental_mediastore",
        "displayName": "Elemental Mediastore",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-MediaStore_64.svg"
      },
      {
        "slug": "elemental_mediatailor",
        "displayName": "Elemental Mediatailor",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-MediaTailor_64.svg"
      },
      {
        "slug": "elemental_server",
        "displayName": "Elemental Server",
        "category": "Media Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-Server_64.svg"
      }
    ],
    "Developer Tools": [
      {
        "slug": "res_cloud9_cloud9",
        "displayName": "Res Cloud9 Cloud9",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Developer-Tools/Res_AWS-Cloud9_Cloud9_48.svg"
      },
      {
        "slug": "codecatalyst",
        "displayName": "Codecatalyst",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_Amazon-CodeCatalyst_64.svg"
      },
      {
        "slug": "corretto",
        "displayName": "Corretto",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_Amazon-Corretto_64.svg"
      },
      {
        "slug": "application_composer",
        "displayName": "Application Composer",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-Application-Composer_64.svg"
      },
      {
        "slug": "cloud_control_api",
        "displayName": "Cloud Control Api",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-Cloud-Control-API_64.svg"
      },
      {
        "slug": "cloud_development_kit",
        "displayName": "Cloud Development Kit",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-Cloud-Development-Kit_64.svg"
      },
      {
        "slug": "cloud9",
        "displayName": "Cloud9",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-Cloud9_64.svg"
      },
      {
        "slug": "cloudshell",
        "displayName": "Cloudshell",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CloudShell_64.svg"
      },
      {
        "slug": "codeartifact",
        "displayName": "Codeartifact",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CodeArtifact_64.svg"
      },
      {
        "slug": "codebuild",
        "displayName": "Codebuild",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CodeBuild_64.svg"
      },
      {
        "slug": "codecommit",
        "displayName": "Codecommit",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CodeCommit_64.svg"
      },
      {
        "slug": "codedeploy",
        "displayName": "Codedeploy",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CodeDeploy_64.svg"
      },
      {
        "slug": "codepipeline",
        "displayName": "Codepipeline",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CodePipeline_64.svg"
      },
      {
        "slug": "codestar",
        "displayName": "Codestar",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CodeStar_64.svg"
      },
      {
        "slug": "command_line_interface",
        "displayName": "Command Line Interface",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-Command-Line-Interface_64.svg"
      },
      {
        "slug": "tools_and_sdks",
        "displayName": "Tools And Sdks",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-Tools-and-SDKs_64.svg"
      },
      {
        "slug": "x_ray",
        "displayName": "X Ray",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-X-Ray_64.svg"
      }
    ],
    "Management & Governance": [
      {
        "slug": "res_cloudformation_change_set",
        "displayName": "Res Cloudformation Change Set",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-CloudFormation_Change-Set_48.svg"
      },
      {
        "slug": "res_cloudformation_stack",
        "displayName": "Res Cloudformation Stack",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-CloudFormation_Stack_48.svg"
      },
      {
        "slug": "res_cloudformation_template",
        "displayName": "Res Cloudformation Template",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-CloudFormation_Template_48.svg"
      },
      {
        "slug": "res_cloudtrail_cloudtrail_lake",
        "displayName": "Res Cloudtrail Cloudtrail Lake",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-CloudTrail_CloudTrail-Lake_48.svg"
      },
      {
        "slug": "res_cloudwatch_alarm",
        "displayName": "Res Cloudwatch Alarm",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Alarm_48.svg"
      },
      {
        "slug": "res_cloudwatch_cross_account_observability",
        "displayName": "Res Cloudwatch Cross Account Observability",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Cross-account-Observability_48.svg"
      },
      {
        "slug": "res_cloudwatch_data_protection",
        "displayName": "Res Cloudwatch Data Protection",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Data-Protection_48.svg"
      },
      {
        "slug": "res_cloudwatch_event_event_based",
        "displayName": "Res Cloudwatch Event Event Based",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Event-Event-Based_48.svg"
      },
      {
        "slug": "res_cloudwatch_event_time_based",
        "displayName": "Res Cloudwatch Event Time Based",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Event-Time-Based_48.svg"
      },
      {
        "slug": "res_cloudwatch_evidently",
        "displayName": "Res Cloudwatch Evidently",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Evidently_48.svg"
      },
      {
        "slug": "res_cloudwatch_logs",
        "displayName": "Res Cloudwatch Logs",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Logs_48.svg"
      },
      {
        "slug": "res_cloudwatch_metrics_insights",
        "displayName": "Res Cloudwatch Metrics Insights",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Metrics-Insights_48.svg"
      },
      {
        "slug": "res_cloudwatch_rule",
        "displayName": "Res Cloudwatch Rule",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Rule_48.svg"
      },
      {
        "slug": "res_cloudwatch_rum",
        "displayName": "Res Cloudwatch Rum",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_RUM_48.svg"
      },
      {
        "slug": "res_cloudwatch_synthetics",
        "displayName": "Res Cloudwatch Synthetics",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Synthetics_48.svg"
      },
      {
        "slug": "res_license_manager_application_discovery",
        "displayName": "Res License Manager Application Discovery",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-License-Manager_Application-Discovery_48.svg"
      },
      {
        "slug": "res_license_manager_license_blending",
        "displayName": "Res License Manager License Blending",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-License-Manager_License-Blending_48.svg"
      },
      {
        "slug": "res_opsworks_apps",
        "displayName": "Res Opsworks Apps",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Apps_48.svg"
      },
      {
        "slug": "res_opsworks_deployments",
        "displayName": "Res Opsworks Deployments",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Deployments_48.svg"
      },
      {
        "slug": "res_opsworks_instances",
        "displayName": "Res Opsworks Instances",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Instances_48.svg"
      },
      {
        "slug": "res_opsworks_layers",
        "displayName": "Res Opsworks Layers",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Layers_48.svg"
      },
      {
        "slug": "res_opsworks_monitoring",
        "displayName": "Res Opsworks Monitoring",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Monitoring_48.svg"
      },
      {
        "slug": "res_opsworks_permissions",
        "displayName": "Res Opsworks Permissions",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Permissions_48.svg"
      },
      {
        "slug": "res_opsworks_resources",
        "displayName": "Res Opsworks Resources",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Resources_48.svg"
      },
      {
        "slug": "res_opsworks_stack2",
        "displayName": "Res Opsworks Stack2",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Stack2_48.svg"
      },
      {
        "slug": "res_organizations_account",
        "displayName": "Res Organizations Account",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Organizations_Account_48.svg"
      },
      {
        "slug": "res_organizations_management_account",
        "displayName": "Res Organizations Management Account",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Organizations_Management-Account_48.svg"
      },
      {
        "slug": "res_organizations_organizational_unit",
        "displayName": "Res Organizations Organizational Unit",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Organizations_Organizational-Unit_48.svg"
      },
      {
        "slug": "res_systems_manager_application_manager",
        "displayName": "Res Systems Manager Application Manager",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Application-Manager_48.svg"
      },
      {
        "slug": "res_systems_manager_automation",
        "displayName": "Res Systems Manager Automation",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Automation_48.svg"
      },
      {
        "slug": "res_systems_manager_change_calendar",
        "displayName": "Res Systems Manager Change Calendar",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Change-Calendar_48.svg"
      },
      {
        "slug": "res_systems_manager_change_manager",
        "displayName": "Res Systems Manager Change Manager",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Change-Manager_48.svg"
      },
      {
        "slug": "res_systems_manager_compliance",
        "displayName": "Res Systems Manager Compliance",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Compliance_48.svg"
      },
      {
        "slug": "res_systems_manager_distributor",
        "displayName": "Res Systems Manager Distributor",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Distributor_48.svg"
      },
      {
        "slug": "res_systems_manager_documents",
        "displayName": "Res Systems Manager Documents",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Documents_48.svg"
      },
      {
        "slug": "res_systems_manager_incident_manager",
        "displayName": "Res Systems Manager Incident Manager",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Incident-Manager_48.svg"
      },
      {
        "slug": "res_systems_manager_inventory",
        "displayName": "Res Systems Manager Inventory",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Inventory_48.svg"
      },
      {
        "slug": "res_systems_manager_maintenance_windows",
        "displayName": "Res Systems Manager Maintenance Windows",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Maintenance-Windows_48.svg"
      },
      {
        "slug": "res_systems_manager_opscenter",
        "displayName": "Res Systems Manager Opscenter",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_OpsCenter_48.svg"
      },
      {
        "slug": "res_systems_manager_parameter_store",
        "displayName": "Res Systems Manager Parameter Store",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Parameter-Store_48.svg"
      },
      {
        "slug": "res_systems_manager_patch_manager",
        "displayName": "Res Systems Manager Patch Manager",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Patch-Manager_48.svg"
      },
      {
        "slug": "res_systems_manager_run_command",
        "displayName": "Res Systems Manager Run Command",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Run-Command_48.svg"
      },
      {
        "slug": "res_systems_manager_session_manager",
        "displayName": "Res Systems Manager Session Manager",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Session-Manager_48.svg"
      },
      {
        "slug": "res_systems_manager_state_manager",
        "displayName": "Res Systems Manager State Manager",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_State-Manager_48.svg"
      },
      {
        "slug": "res_trusted_advisor_checklist",
        "displayName": "Res Trusted Advisor Checklist",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Trusted-Advisor_Checklist_48.svg"
      },
      {
        "slug": "res_trusted_advisor_checklist_cost",
        "displayName": "Res Trusted Advisor Checklist Cost",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Trusted-Advisor_Checklist-Cost_48.svg"
      },
      {
        "slug": "res_trusted_advisor_checklist_fault_tolerant",
        "displayName": "Res Trusted Advisor Checklist Fault Tolerant",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Trusted-Advisor_Checklist-Fault-Tolerant_48.svg"
      },
      {
        "slug": "res_trusted_advisor_checklist_performance",
        "displayName": "Res Trusted Advisor Checklist Performance",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Trusted-Advisor_Checklist-Performance_48.svg"
      },
      {
        "slug": "res_trusted_advisor_checklist_security",
        "displayName": "Res Trusted Advisor Checklist Security",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Trusted-Advisor_Checklist-Security_48.svg"
      },
      {
        "slug": "cloudwatch",
        "displayName": "Cloudwatch",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_Amazon-CloudWatch_64.svg"
      },
      {
        "slug": "managed_grafana",
        "displayName": "Managed Grafana",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_Amazon-Managed-Grafana_64.svg"
      },
      {
        "slug": "managed_service_for_prometheus",
        "displayName": "Managed Service For Prometheus",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_Amazon-Managed-Service-for-Prometheus_64.svg"
      },
      {
        "slug": "appconfig",
        "displayName": "Appconfig",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-AppConfig_64.svg"
      },
      {
        "slug": "application_auto_scaling",
        "displayName": "Application Auto Scaling",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Application-Auto-Scaling_64.svg"
      },
      {
        "slug": "auto_scaling",
        "displayName": "Auto Scaling",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Auto-Scaling_64.svg"
      },
      {
        "slug": "backint_agent",
        "displayName": "Backint Agent",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Backint-Agent_64.svg"
      },
      {
        "slug": "chatbot",
        "displayName": "Chatbot",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Chatbot_64.svg"
      },
      {
        "slug": "cloudformation",
        "displayName": "Cloudformation",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-CloudFormation_64.svg"
      },
      {
        "slug": "cloudtrail",
        "displayName": "Cloudtrail",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-CloudTrail_64.svg"
      },
      {
        "slug": "config",
        "displayName": "Config",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Config_64.svg"
      },
      {
        "slug": "control_tower",
        "displayName": "Control Tower",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Control-Tower_64.svg"
      },
      {
        "slug": "distro_for_opentelemetry",
        "displayName": "Distro For Opentelemetry",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Distro-for-OpenTelemetry_64.svg"
      },
      {
        "slug": "fault_injection_simulator",
        "displayName": "Fault Injection Simulator",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Fault-Injection-Simulator_64.svg"
      },
      {
        "slug": "health_dashboard",
        "displayName": "Health Dashboard",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Health-Dashboard_64.svg"
      },
      {
        "slug": "launch_wizard",
        "displayName": "Launch Wizard",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Launch-Wizard_64.svg"
      },
      {
        "slug": "license_manager",
        "displayName": "License Manager",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-License-Manager_64.svg"
      },
      {
        "slug": "management_console",
        "displayName": "Management Console",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Management-Console_64.svg"
      },
      {
        "slug": "opsworks",
        "displayName": "Opsworks",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-OpsWorks_64.svg"
      },
      {
        "slug": "organizations",
        "displayName": "Organizations",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Organizations_64.svg"
      },
      {
        "slug": "proton",
        "displayName": "Proton",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Proton_64.svg"
      },
      {
        "slug": "resilience_hub",
        "displayName": "Resilience Hub",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Resilience-Hub_64.svg"
      },
      {
        "slug": "resource_explorer",
        "displayName": "Resource Explorer",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Resource-Explorer_64.svg"
      },
      {
        "slug": "service_catalog",
        "displayName": "Service Catalog",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Service-Catalog_64.svg"
      },
      {
        "slug": "service_management_connector",
        "displayName": "Service Management Connector",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Service-Management-Connector_64.svg"
      },
      {
        "slug": "systems_manager",
        "displayName": "Systems Manager",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Systems-Manager_64.svg"
      },
      {
        "slug": "telco_network_builder",
        "displayName": "Telco Network Builder",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Telco-Network-Builder_64.svg"
      },
      {
        "slug": "trusted_advisor",
        "displayName": "Trusted Advisor",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Trusted-Advisor_64.svg"
      },
      {
        "slug": "well_architected_tool",
        "displayName": "Well Architected Tool",
        "category": "Management & Governance",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Well-Architected-Tool_64.svg"
      }
    ],
    "Machine Learning": [
      {
        "slug": "res_devops_guru_insights",
        "displayName": "Res Devops Guru Insights",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-DevOps-Guru_Insights_48.svg"
      },
      {
        "slug": "res_rekognition_image",
        "displayName": "Res Rekognition Image",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-Rekognition_Image_48.svg"
      },
      {
        "slug": "res_rekognition_video",
        "displayName": "Res Rekognition Video",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-Rekognition_Video_48.svg"
      },
      {
        "slug": "res_sagemaker_canvas",
        "displayName": "Res Sagemaker Canvas",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-SageMaker_Canvas_48.svg"
      },
      {
        "slug": "res_sagemaker_geospatial_ml",
        "displayName": "Res Sagemaker Geospatial Ml",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-SageMaker_Geospatial-ML_48.svg"
      },
      {
        "slug": "res_sagemaker_model",
        "displayName": "Res Sagemaker Model",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-SageMaker_Model_48.svg"
      },
      {
        "slug": "res_sagemaker_notebook",
        "displayName": "Res Sagemaker Notebook",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-SageMaker_Notebook_48.svg"
      },
      {
        "slug": "res_sagemaker_shadow_testing",
        "displayName": "Res Sagemaker Shadow Testing",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-SageMaker_Shadow-Testing_48.svg"
      },
      {
        "slug": "res_sagemaker_train",
        "displayName": "Res Sagemaker Train",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-SageMaker_Train_48.svg"
      },
      {
        "slug": "res_textract_analyze_lending",
        "displayName": "Res Textract Analyze Lending",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-Textract_Analyze-Lending_48.svg"
      },
      {
        "slug": "augmented_ai_a2i",
        "displayName": "Augmented Ai A2i",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Augmented-AI-A2I_64.svg"
      },
      {
        "slug": "bedrock",
        "displayName": "Bedrock",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Bedrock_64.svg"
      },
      {
        "slug": "codeguru",
        "displayName": "Codeguru",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-CodeGuru_64.svg"
      },
      {
        "slug": "codewhisperer",
        "displayName": "Codewhisperer",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-CodeWhisperer_64.svg"
      },
      {
        "slug": "comprehend",
        "displayName": "Comprehend",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Comprehend_64.svg"
      },
      {
        "slug": "comprehend_medical",
        "displayName": "Comprehend Medical",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Comprehend-Medical_64.svg"
      },
      {
        "slug": "devops_guru",
        "displayName": "Devops Guru",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-DevOps-Guru_64.svg"
      },
      {
        "slug": "elastic_inference",
        "displayName": "Elastic Inference",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Elastic-Inference_64.svg"
      },
      {
        "slug": "forecast",
        "displayName": "Forecast",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Forecast_64.svg"
      },
      {
        "slug": "fraud_detector",
        "displayName": "Fraud Detector",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Fraud-Detector_64.svg"
      },
      {
        "slug": "kendra",
        "displayName": "Kendra",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Kendra_64.svg"
      },
      {
        "slug": "lex",
        "displayName": "Lex",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Lex_64.svg"
      },
      {
        "slug": "lookout_for_equipment",
        "displayName": "Lookout For Equipment",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Lookout-for-Equipment_64.svg"
      },
      {
        "slug": "lookout_for_metrics",
        "displayName": "Lookout For Metrics",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Lookout-for-Metrics_64.svg"
      },
      {
        "slug": "lookout_for_vision",
        "displayName": "Lookout For Vision",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Lookout-for-Vision_64.svg"
      },
      {
        "slug": "monitron",
        "displayName": "Monitron",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Monitron_64.svg"
      },
      {
        "slug": "personalize",
        "displayName": "Personalize",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Personalize_64.svg"
      },
      {
        "slug": "polly",
        "displayName": "Polly",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Polly_64.svg"
      },
      {
        "slug": "q",
        "displayName": "Q",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Q_64.svg"
      },
      {
        "slug": "rekognition",
        "displayName": "Rekognition",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Rekognition_64.svg"
      },
      {
        "slug": "sagemaker",
        "displayName": "Sagemaker",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-SageMaker_64.svg"
      },
      {
        "slug": "sagemaker_ground_truth",
        "displayName": "Sagemaker Ground Truth",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-SageMaker-Ground-Truth_64.svg"
      },
      {
        "slug": "sagemaker_studio_lab",
        "displayName": "Sagemaker Studio Lab",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-SageMaker-Studio-Lab_64.svg"
      },
      {
        "slug": "textract",
        "displayName": "Textract",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Textract_64.svg"
      },
      {
        "slug": "transcribe",
        "displayName": "Transcribe",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Transcribe_64.svg"
      },
      {
        "slug": "translate",
        "displayName": "Translate",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Translate_64.svg"
      },
      {
        "slug": "apache_mxnet_on_aws",
        "displayName": "Apache Mxnet On Aws",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Apache-MXNet-on-AWS_64.svg"
      },
      {
        "slug": "deep_learning_amis",
        "displayName": "Deep Learning Amis",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-Deep-Learning-AMIs_64.svg"
      },
      {
        "slug": "deep_learning_containers",
        "displayName": "Deep Learning Containers",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-Deep-Learning-Containers_64.svg"
      },
      {
        "slug": "deepcomposer",
        "displayName": "Deepcomposer",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-DeepComposer_64.svg"
      },
      {
        "slug": "deeplens",
        "displayName": "Deeplens",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-DeepLens_64.svg"
      },
      {
        "slug": "deepracer",
        "displayName": "Deepracer",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-DeepRacer_64.svg"
      },
      {
        "slug": "healthimaging",
        "displayName": "Healthimaging",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-HealthImaging_64.svg"
      },
      {
        "slug": "healthlake",
        "displayName": "Healthlake",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-HealthLake_64.svg"
      },
      {
        "slug": "healthomics",
        "displayName": "Healthomics",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-HealthOmics_64.svg"
      },
      {
        "slug": "healthscribe",
        "displayName": "Healthscribe",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-HealthScribe_64.svg"
      },
      {
        "slug": "neuron",
        "displayName": "Neuron",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-Neuron_64.svg"
      },
      {
        "slug": "panorama",
        "displayName": "Panorama",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-Panorama_64.svg"
      },
      {
        "slug": "tensorflow_on_aws",
        "displayName": "Tensorflow On Aws",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_TensorFlow-on-AWS_64.svg"
      },
      {
        "slug": "torchserve",
        "displayName": "Torchserve",
        "category": "Machine Learning",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_TorchServe_64.svg"
      }
    ],
    "Compute": [
      {
        "slug": "res_ec2_ami",
        "displayName": "Res Ec2 Ami",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_AMI_48.svg"
      },
      {
        "slug": "res_ec2_auto_scaling",
        "displayName": "Res Ec2 Auto Scaling",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Auto-Scaling_48.svg"
      },
      {
        "slug": "res_ec2_aws_microservice_extractor_for_.net",
        "displayName": "Res Ec2 Aws Microservice Extractor For .Net",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_AWS-Microservice-Extractor-for-.NET_48.svg"
      },
      {
        "slug": "res_ec2_db_instance",
        "displayName": "Res Ec2 Db Instance",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_DB-Instance_48.svg"
      },
      {
        "slug": "res_ec2_elastic_ip_address",
        "displayName": "Res Ec2 Elastic Ip Address",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Elastic-IP-Address_48.svg"
      },
      {
        "slug": "res_ec2_instance",
        "displayName": "Res Ec2 Instance",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Instance_48.svg"
      },
      {
        "slug": "res_ec2_instance_with_cloudwatch",
        "displayName": "Res Ec2 Instance With Cloudwatch",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Instance-with-CloudWatch_48.svg"
      },
      {
        "slug": "res_ec2_instances",
        "displayName": "Res Ec2 Instances",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Instances_48.svg"
      },
      {
        "slug": "res_ec2_rescue",
        "displayName": "Res Ec2 Rescue",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Rescue_48.svg"
      },
      {
        "slug": "res_ec2_spot_instance",
        "displayName": "Res Ec2 Spot Instance",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Spot-Instance_48.svg"
      },
      {
        "slug": "res_elastic_beanstalk_application",
        "displayName": "Res Elastic Beanstalk Application",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_AWS-Elastic-Beanstalk_Application_48.svg"
      },
      {
        "slug": "res_elastic_beanstalk_deployment",
        "displayName": "Res Elastic Beanstalk Deployment",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_AWS-Elastic-Beanstalk_Deployment_48.svg"
      },
      {
        "slug": "res_lambda_lambda_function",
        "displayName": "Res Lambda Lambda Function",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_AWS-Lambda_Lambda-Function_48.svg"
      },
      {
        "slug": "ec2",
        "displayName": "Ec2",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-EC2_64.svg"
      },
      {
        "slug": "ec2_auto_scaling",
        "displayName": "Ec2 Auto Scaling",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-EC2-Auto-Scaling_64.svg"
      },
      {
        "slug": "ec2_image_builder",
        "displayName": "Ec2 Image Builder",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-EC2-Image-Builder_64.svg"
      },
      {
        "slug": "genomics_cli",
        "displayName": "Genomics Cli",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-Genomics-CLI_64.svg"
      },
      {
        "slug": "lightsail",
        "displayName": "Lightsail",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-Lightsail_64.svg"
      },
      {
        "slug": "lightsail_for_research",
        "displayName": "Lightsail For Research",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-Lightsail-for-Research_64.svg"
      },
      {
        "slug": "app_runner",
        "displayName": "App Runner",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-App-Runner_64.svg"
      },
      {
        "slug": "batch",
        "displayName": "Batch",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Batch_64.svg"
      },
      {
        "slug": "compute_optimizer",
        "displayName": "Compute Optimizer",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Compute-Optimizer_64.svg"
      },
      {
        "slug": "elastic_beanstalk",
        "displayName": "Elastic Beanstalk",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Elastic-Beanstalk_64.svg"
      },
      {
        "slug": "lambda",
        "displayName": "Lambda",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Lambda_64.svg"
      },
      {
        "slug": "local_zones",
        "displayName": "Local Zones",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Local-Zones_64.svg"
      },
      {
        "slug": "nitro_enclaves",
        "displayName": "Nitro Enclaves",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Nitro-Enclaves_64.svg"
      },
      {
        "slug": "outposts_family",
        "displayName": "Outposts Family",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Outposts-family_64.svg"
      },
      {
        "slug": "outposts_rack",
        "displayName": "Outposts Rack",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Outposts-rack_64.svg"
      },
      {
        "slug": "outposts_servers",
        "displayName": "Outposts Servers",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Outposts-servers_64.svg"
      },
      {
        "slug": "parallel_cluster",
        "displayName": "Parallel Cluster",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Parallel-Cluster_64.svg"
      },
      {
        "slug": "serverless_application_repository",
        "displayName": "Serverless Application Repository",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Serverless-Application-Repository_64.svg"
      },
      {
        "slug": "simspace_weaver",
        "displayName": "Simspace Weaver",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-SimSpace-Weaver_64.svg"
      },
      {
        "slug": "thinkbox_deadline",
        "displayName": "Thinkbox Deadline",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Thinkbox-Deadline_64.svg"
      },
      {
        "slug": "thinkbox_frost",
        "displayName": "Thinkbox Frost",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Thinkbox-Frost_64.svg"
      },
      {
        "slug": "thinkbox_krakatoa",
        "displayName": "Thinkbox Krakatoa",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Thinkbox-Krakatoa_64.svg"
      },
      {
        "slug": "thinkbox_sequoia",
        "displayName": "Thinkbox Sequoia",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Thinkbox-Sequoia_64.svg"
      },
      {
        "slug": "thinkbox_stoke",
        "displayName": "Thinkbox Stoke",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Thinkbox-Stoke_64.svg"
      },
      {
        "slug": "thinkbox_xmesh",
        "displayName": "Thinkbox Xmesh",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Thinkbox-XMesh_64.svg"
      },
      {
        "slug": "wavelength",
        "displayName": "Wavelength",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Wavelength_64.svg"
      },
      {
        "slug": "bottlerocket",
        "displayName": "Bottlerocket",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Bottlerocket_64.svg"
      },
      {
        "slug": "elastic_fabric_adapter",
        "displayName": "Elastic Fabric Adapter",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Elastic-Fabric-Adapter_64.svg"
      },
      {
        "slug": "nice_dcv",
        "displayName": "Nice Dcv",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_NICE-DCV_64.svg"
      },
      {
        "slug": "nice_enginframe",
        "displayName": "Nice Enginframe",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_NICE-EnginFrame_64.svg"
      },
      {
        "slug": "vmware_cloud_on_aws",
        "displayName": "Vmware Cloud On Aws",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_VMware-Cloud-on-AWS_64.svg"
      }
    ],
    "Containers": [
      {
        "slug": "res_elastic_container_registry_image",
        "displayName": "Res Elastic Container Registry Image",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Registry_Image_48.svg"
      },
      {
        "slug": "res_elastic_container_registry_registry",
        "displayName": "Res Elastic Container Registry Registry",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Registry_Registry_48.svg"
      },
      {
        "slug": "res_elastic_container_service_container_1",
        "displayName": "Res Elastic Container Service Container 1",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_Container-1_48.svg"
      },
      {
        "slug": "res_elastic_container_service_container_2",
        "displayName": "Res Elastic Container Service Container 2",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_Container-2_48.svg"
      },
      {
        "slug": "res_elastic_container_service_container_3",
        "displayName": "Res Elastic Container Service Container 3",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_Container-3_48.svg"
      },
      {
        "slug": "res_elastic_container_service_copiiot_cli",
        "displayName": "Res Elastic Container Service Copiiot Cli",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_CopiIoT-CLI_48.svg"
      },
      {
        "slug": "res_elastic_container_service_ecs_service_connect",
        "displayName": "Res Elastic Container Service Ecs Service Connect",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_ECS-Service-Connect_48.svg"
      },
      {
        "slug": "res_elastic_container_service_service",
        "displayName": "Res Elastic Container Service Service",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_Service_48.svg"
      },
      {
        "slug": "res_elastic_container_service_task",
        "displayName": "Res Elastic Container Service Task",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_Task_48.svg"
      },
      {
        "slug": "res_elastic_kubernetes_service_eks_on_outposts",
        "displayName": "Res Elastic Kubernetes Service Eks On Outposts",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Kubernetes-Service_EKS-on-Outposts_48.svg"
      },
      {
        "slug": "ecs_anywhere",
        "displayName": "Ecs Anywhere",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-ECS-Anywhere_64.svg"
      },
      {
        "slug": "eks_anywhere",
        "displayName": "Eks Anywhere",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-EKS-Anywhere_64.svg"
      },
      {
        "slug": "eks_cloud",
        "displayName": "Eks Cloud",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-EKS-Cloud_64.svg"
      },
      {
        "slug": "eks_distro",
        "displayName": "Eks Distro",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-EKS-Distro_64.svg"
      },
      {
        "slug": "elastic_container_registry",
        "displayName": "Elastic Container Registry",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-Elastic-Container-Registry_64.svg"
      },
      {
        "slug": "elastic_container_service",
        "displayName": "Elastic Container Service",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-Elastic-Container-Service_64.svg"
      },
      {
        "slug": "elastic_kubernetes_service",
        "displayName": "Elastic Kubernetes Service",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-Elastic-Kubernetes-Service_64.svg"
      },
      {
        "slug": "fargate",
        "displayName": "Fargate",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_AWS-Fargate_64.svg"
      },
      {
        "slug": "red_hat_openshift_service_on_aws",
        "displayName": "Red Hat Openshift Service On Aws",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Red-Hat-OpenShift-Service-on-AWS_64.svg"
      }
    ],
    "Internet of Things": [
      {
        "slug": "res_iot_action",
        "displayName": "Res Iot Action",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Action_48.svg"
      },
      {
        "slug": "res_iot_actuator",
        "displayName": "Res Iot Actuator",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Actuator_48.svg"
      },
      {
        "slug": "res_iot_alexa_enabled_device",
        "displayName": "Res Iot Alexa Enabled Device",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Alexa_Enabled-Device_48.svg"
      },
      {
        "slug": "res_iot_alexa_skill",
        "displayName": "Res Iot Alexa Skill",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Alexa_Skill_48.svg"
      },
      {
        "slug": "res_iot_alexa_voice_service",
        "displayName": "Res Iot Alexa Voice Service",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Alexa_Voice-Service_48.svg"
      },
      {
        "slug": "res_iot_analytics_channel",
        "displayName": "Res Iot Analytics Channel",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Analytics_Channel_48.svg"
      },
      {
        "slug": "res_iot_analytics_data_store",
        "displayName": "Res Iot Analytics Data Store",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Analytics_Data-Store_48.svg"
      },
      {
        "slug": "res_iot_analytics_dataset",
        "displayName": "Res Iot Analytics Dataset",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Analytics_Dataset_48.svg"
      },
      {
        "slug": "res_iot_analytics_notebook",
        "displayName": "Res Iot Analytics Notebook",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Analytics_Notebook_48.svg"
      },
      {
        "slug": "res_iot_analytics_pipeline",
        "displayName": "Res Iot Analytics Pipeline",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Analytics_Pipeline_48.svg"
      },
      {
        "slug": "res_iot_certificate",
        "displayName": "Res Iot Certificate",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Certificate_48.svg"
      },
      {
        "slug": "res_iot_core_device_advisor",
        "displayName": "Res Iot Core Device Advisor",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Core_Device-Advisor_48.svg"
      },
      {
        "slug": "res_iot_core_device_location",
        "displayName": "Res Iot Core Device Location",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Core_Device-Location_48.svg"
      },
      {
        "slug": "res_iot_desired_state",
        "displayName": "Res Iot Desired State",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Desired-State_48.svg"
      },
      {
        "slug": "res_iot_device_defender_iot_device_jobs",
        "displayName": "Res Iot Device Defender Iot Device Jobs",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Device-Defender_IoT-Device-Jobs_48.svg"
      },
      {
        "slug": "res_iot_device_gateway",
        "displayName": "Res Iot Device Gateway",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Device-Gateway_48.svg"
      },
      {
        "slug": "res_iot_device_management_fleet_hub",
        "displayName": "Res Iot Device Management Fleet Hub",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Device-Management_Fleet-Hub_48.svg"
      },
      {
        "slug": "res_iot_device_tester",
        "displayName": "Res Iot Device Tester",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Device-Tester_48.svg"
      },
      {
        "slug": "res_iot_echo",
        "displayName": "Res Iot Echo",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Echo_48.svg"
      },
      {
        "slug": "res_iot_fire_tv",
        "displayName": "Res Iot Fire Tv",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Fire_TV_48.svg"
      },
      {
        "slug": "res_iot_fire_tv_stick",
        "displayName": "Res Iot Fire Tv Stick",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Fire-TV_Stick_48.svg"
      },
      {
        "slug": "res_iot_greengrass_artifact",
        "displayName": "Res Iot Greengrass Artifact",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Artifact_48.svg"
      },
      {
        "slug": "res_iot_greengrass_component",
        "displayName": "Res Iot Greengrass Component",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Component_48.svg"
      },
      {
        "slug": "res_iot_greengrass_component_machine_learning",
        "displayName": "Res Iot Greengrass Component Machine Learning",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Component-Machine-Learning_48.svg"
      },
      {
        "slug": "res_iot_greengrass_component_nucleus",
        "displayName": "Res Iot Greengrass Component Nucleus",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Component-Nucleus_48.svg"
      },
      {
        "slug": "res_iot_greengrass_component_private",
        "displayName": "Res Iot Greengrass Component Private",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Component-Private_48.svg"
      },
      {
        "slug": "res_iot_greengrass_component_public",
        "displayName": "Res Iot Greengrass Component Public",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Component-Public_48.svg"
      },
      {
        "slug": "res_iot_greengrass_connector",
        "displayName": "Res Iot Greengrass Connector",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Connector_48.svg"
      },
      {
        "slug": "res_iot_greengrass_interprocess_communication",
        "displayName": "Res Iot Greengrass Interprocess Communication",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Interprocess-Communication_48.svg"
      },
      {
        "slug": "res_iot_greengrass_protocol",
        "displayName": "Res Iot Greengrass Protocol",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Protocol_48.svg"
      },
      {
        "slug": "res_iot_greengrass_recipe",
        "displayName": "Res Iot Greengrass Recipe",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Recipe_48.svg"
      },
      {
        "slug": "res_iot_greengrass_stream_manager",
        "displayName": "Res Iot Greengrass Stream Manager",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Stream-Manager_48.svg"
      },
      {
        "slug": "res_iot_hardware_board",
        "displayName": "Res Iot Hardware Board",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Hardware-Board_48.svg"
      },
      {
        "slug": "res_iot_http_protocol",
        "displayName": "Res Iot Http Protocol",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_HTTP_Protocol_48.svg"
      },
      {
        "slug": "res_iot_http2_protocol",
        "displayName": "Res Iot Http2 Protocol",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_HTTP2-Protocol_48.svg"
      },
      {
        "slug": "res_iot_lambda_function",
        "displayName": "Res Iot Lambda Function",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Lambda_Function_48.svg"
      },
      {
        "slug": "res_iot_lorawan_protocol",
        "displayName": "Res Iot Lorawan Protocol",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_LoRaWAN-Protocol_48.svg"
      },
      {
        "slug": "res_iot_mqtt_protocol",
        "displayName": "Res Iot Mqtt Protocol",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_MQTT_Protocol_48.svg"
      },
      {
        "slug": "res_iot_over_air_update",
        "displayName": "Res Iot Over Air Update",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Over-Air-Update_48.svg"
      },
      {
        "slug": "res_iot_policy",
        "displayName": "Res Iot Policy",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Policy_48.svg"
      },
      {
        "slug": "res_iot_reported_state",
        "displayName": "Res Iot Reported State",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Reported-State_48.svg"
      },
      {
        "slug": "res_iot_rule",
        "displayName": "Res Iot Rule",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Rule_48.svg"
      },
      {
        "slug": "res_iot_sailboat",
        "displayName": "Res Iot Sailboat",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Sailboat_48.svg"
      },
      {
        "slug": "res_iot_sensor",
        "displayName": "Res Iot Sensor",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Sensor_48.svg"
      },
      {
        "slug": "res_iot_servo",
        "displayName": "Res Iot Servo",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Servo_48.svg"
      },
      {
        "slug": "res_iot_shadow",
        "displayName": "Res Iot Shadow",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Shadow_48.svg"
      },
      {
        "slug": "res_iot_simulator",
        "displayName": "Res Iot Simulator",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Simulator_48.svg"
      },
      {
        "slug": "res_iot_sitewise_asset",
        "displayName": "Res Iot Sitewise Asset",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-SiteWise_Asset_48.svg"
      },
      {
        "slug": "res_iot_sitewise_asset_hierarchy",
        "displayName": "Res Iot Sitewise Asset Hierarchy",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-SiteWise_Asset-Hierarchy_48.svg"
      },
      {
        "slug": "res_iot_sitewise_asset_model",
        "displayName": "Res Iot Sitewise Asset Model",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-SiteWise_Asset-Model_48.svg"
      },
      {
        "slug": "res_iot_sitewise_asset_properties",
        "displayName": "Res Iot Sitewise Asset Properties",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-SiteWise_Asset-Properties_48.svg"
      },
      {
        "slug": "res_iot_sitewise_data_streams",
        "displayName": "Res Iot Sitewise Data Streams",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-SiteWise_Data-Streams_48.svg"
      },
      {
        "slug": "res_iot_thing_bank",
        "displayName": "Res Iot Thing Bank",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Bank_48.svg"
      },
      {
        "slug": "res_iot_thing_bicycle",
        "displayName": "Res Iot Thing Bicycle",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Bicycle_48.svg"
      },
      {
        "slug": "res_iot_thing_camera",
        "displayName": "Res Iot Thing Camera",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Camera_48.svg"
      },
      {
        "slug": "res_iot_thing_car",
        "displayName": "Res Iot Thing Car",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Car_48.svg"
      },
      {
        "slug": "res_iot_thing_cart",
        "displayName": "Res Iot Thing Cart",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Cart_48.svg"
      },
      {
        "slug": "res_iot_thing_coffee_pot",
        "displayName": "Res Iot Thing Coffee Pot",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Coffee-Pot_48.svg"
      },
      {
        "slug": "res_iot_thing_door_lock",
        "displayName": "Res Iot Thing Door Lock",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Door-Lock_48.svg"
      },
      {
        "slug": "res_iot_thing_factory",
        "displayName": "Res Iot Thing Factory",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Factory_48.svg"
      },
      {
        "slug": "res_iot_thing_freertos_device",
        "displayName": "Res Iot Thing Freertos Device",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_FreeRTOS-Device_48.svg"
      },
      {
        "slug": "res_iot_thing_generic",
        "displayName": "Res Iot Thing Generic",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Generic_48.svg"
      },
      {
        "slug": "res_iot_thing_house",
        "displayName": "Res Iot Thing House",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_House_48.svg"
      },
      {
        "slug": "res_iot_thing_humidity_sensor",
        "displayName": "Res Iot Thing Humidity Sensor",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Humidity-Sensor_48.svg"
      },
      {
        "slug": "res_iot_thing_industrial_pc",
        "displayName": "Res Iot Thing Industrial Pc",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Industrial-PC_48.svg"
      },
      {
        "slug": "res_iot_thing_lightbulb",
        "displayName": "Res Iot Thing Lightbulb",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Lightbulb_48.svg"
      },
      {
        "slug": "res_iot_thing_medical_emergency",
        "displayName": "Res Iot Thing Medical Emergency",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Medical-Emergency_48.svg"
      },
      {
        "slug": "res_iot_thing_plc",
        "displayName": "Res Iot Thing Plc",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_PLC_48.svg"
      },
      {
        "slug": "res_iot_thing_police_emergency",
        "displayName": "Res Iot Thing Police Emergency",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Police-Emergency_48.svg"
      },
      {
        "slug": "res_iot_thing_relay",
        "displayName": "Res Iot Thing Relay",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Relay_48.svg"
      },
      {
        "slug": "res_iot_thing_stacklight",
        "displayName": "Res Iot Thing Stacklight",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Stacklight_48.svg"
      },
      {
        "slug": "res_iot_thing_temperature_humidity_sensor",
        "displayName": "Res Iot Thing Temperature Humidity Sensor",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Temperature-Humidity-Sensor_48.svg"
      },
      {
        "slug": "res_iot_thing_temperature_sensor",
        "displayName": "Res Iot Thing Temperature Sensor",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Temperature-Sensor_48.svg"
      },
      {
        "slug": "res_iot_thing_temperature_vibration_sensor",
        "displayName": "Res Iot Thing Temperature Vibration Sensor",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Temperature-Vibration-Sensor_48.svg"
      },
      {
        "slug": "res_iot_thing_thermostat",
        "displayName": "Res Iot Thing Thermostat",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Thermostat_48.svg"
      },
      {
        "slug": "res_iot_thing_travel",
        "displayName": "Res Iot Thing Travel",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Travel_48.svg"
      },
      {
        "slug": "res_iot_thing_utility",
        "displayName": "Res Iot Thing Utility",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Utility_48.svg"
      },
      {
        "slug": "res_iot_thing_vibration_sensor",
        "displayName": "Res Iot Thing Vibration Sensor",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Vibration-Sensor_48.svg"
      },
      {
        "slug": "res_iot_thing_windfarm",
        "displayName": "Res Iot Thing Windfarm",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Windfarm_48.svg"
      },
      {
        "slug": "res_iot_topic",
        "displayName": "Res Iot Topic",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Topic_48.svg"
      },
      {
        "slug": "iot_1_click",
        "displayName": "Iot 1 Click",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-1-Click_64.svg"
      },
      {
        "slug": "iot_analytics",
        "displayName": "Iot Analytics",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Analytics_64.svg"
      },
      {
        "slug": "iot_button",
        "displayName": "Iot Button",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Button_64.svg"
      },
      {
        "slug": "iot_core",
        "displayName": "Iot Core",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Core_64.svg"
      },
      {
        "slug": "iot_device_defender",
        "displayName": "Iot Device Defender",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Device-Defender_64.svg"
      },
      {
        "slug": "iot_device_management",
        "displayName": "Iot Device Management",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Device-Management_64.svg"
      },
      {
        "slug": "iot_events",
        "displayName": "Iot Events",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Events_64.svg"
      },
      {
        "slug": "iot_expresslink",
        "displayName": "Iot Expresslink",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-ExpressLink_64.svg"
      },
      {
        "slug": "iot_fleetwise",
        "displayName": "Iot Fleetwise",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-FleetWise_64.svg"
      },
      {
        "slug": "iot_greengrass",
        "displayName": "Iot Greengrass",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Greengrass_64.svg"
      },
      {
        "slug": "iot_roborunner",
        "displayName": "Iot Roborunner",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-RoboRunner_64.svg"
      },
      {
        "slug": "iot_sitewise",
        "displayName": "Iot Sitewise",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-SiteWise_64.svg"
      },
      {
        "slug": "iot_things_graph",
        "displayName": "Iot Things Graph",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Things-Graph_64.svg"
      },
      {
        "slug": "iot_twinmaker",
        "displayName": "Iot Twinmaker",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-TwinMaker_64.svg"
      },
      {
        "slug": "freertos",
        "displayName": "Freertos",
        "category": "Internet of Things",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_FreeRTOS_64.svg"
      }
    ],
    "Blockchain": [
      {
        "slug": "res_managed_blockchain_blockchain",
        "displayName": "Res Managed Blockchain Blockchain",
        "category": "Blockchain",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Blockchain/Res_Amazon-Managed-Blockchain_Blockchain_48.svg"
      },
      {
        "slug": "managed_blockchain",
        "displayName": "Managed Blockchain",
        "category": "Blockchain",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Blockchain/64/Arch_Amazon-Managed-Blockchain_64.svg"
      },
      {
        "slug": "quantum_ledger_database",
        "displayName": "Quantum Ledger Database",
        "category": "Blockchain",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Blockchain/64/Arch_Amazon-Quantum-Ledger-Database_64.svg"
      }
    ],
    "Business Applications": [
      {
        "slug": "res_pinpoint_journey",
        "displayName": "Res Pinpoint Journey",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Business-Applications/Res_Amazon-Pinpoint_Journey_48.svg"
      },
      {
        "slug": "res_simple_email_service_email",
        "displayName": "Res Simple Email Service Email",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Business-Applications/Res_Amazon-Simple-Email-Service_Email_48.svg"
      },
      {
        "slug": "alexa_for_business",
        "displayName": "Alexa For Business",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Alexa-For-Business_64.svg"
      },
      {
        "slug": "chime",
        "displayName": "Chime",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Chime_64.svg"
      },
      {
        "slug": "chime_sdk",
        "displayName": "Chime Sdk",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Chime-SDK_64.svg"
      },
      {
        "slug": "connect",
        "displayName": "Connect",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Connect_64.svg"
      },
      {
        "slug": "honeycode",
        "displayName": "Honeycode",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Honeycode_64.svg"
      },
      {
        "slug": "pinpoint",
        "displayName": "Pinpoint",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Pinpoint_64.svg"
      },
      {
        "slug": "pinpoint_apis",
        "displayName": "Pinpoint Apis",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Pinpoint-APIs_64.svg"
      },
      {
        "slug": "simple_email_service",
        "displayName": "Simple Email Service",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Simple-Email-Service_64.svg"
      },
      {
        "slug": "workdocs",
        "displayName": "Workdocs",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-WorkDocs_64.svg"
      },
      {
        "slug": "workdocs_sdk",
        "displayName": "Workdocs Sdk",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-WorkDocs-SDK_64.svg"
      },
      {
        "slug": "workmail",
        "displayName": "Workmail",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-WorkMail_64.svg"
      },
      {
        "slug": "appfabric",
        "displayName": "Appfabric",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_AWS-AppFabric_64.svg"
      },
      {
        "slug": "supply_chain",
        "displayName": "Supply Chain",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_AWS-Supply-Chain_64.svg"
      },
      {
        "slug": "wickr",
        "displayName": "Wickr",
        "category": "Business Applications",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_AWS-Wickr_64.svg"
      }
    ],
    "Robotics": [
      {
        "slug": "res_robomaker_cloud_extensions_ros",
        "displayName": "Res Robomaker Cloud Extensions Ros",
        "category": "Robotics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Robotics/Res_AWS-RoboMaker_Cloud-Extensions-ROS_48.svg"
      },
      {
        "slug": "res_robomaker_development_environment",
        "displayName": "Res Robomaker Development Environment",
        "category": "Robotics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Robotics/Res_AWS-RoboMaker_Development-Environment_48.svg"
      },
      {
        "slug": "res_robomaker_fleet_management",
        "displayName": "Res Robomaker Fleet Management",
        "category": "Robotics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Robotics/Res_AWS-RoboMaker_Fleet-Management_48.svg"
      },
      {
        "slug": "res_robomaker_simulation",
        "displayName": "Res Robomaker Simulation",
        "category": "Robotics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Robotics/Res_AWS-RoboMaker_Simulation_48.svg"
      },
      {
        "slug": "robomaker",
        "displayName": "Robomaker",
        "category": "Robotics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Robotics/64/Arch_AWS-RoboMaker_64.svg"
      }
    ],
    "End User Computing": [
      {
        "slug": "res_workspaces_family_amazon_workspaces",
        "displayName": "Res Workspaces Family Amazon Workspaces",
        "category": "End User Computing",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_End-User-Computing/Res_Amazon-WorkSpaces-Family_Amazon-WorkSpaces_48.svg"
      },
      {
        "slug": "res_workspaces_family_amazon_workspaces_core",
        "displayName": "Res Workspaces Family Amazon Workspaces Core",
        "category": "End User Computing",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_End-User-Computing/Res_Amazon-WorkSpaces-Family_Amazon-WorkSpaces-Core_48.svg"
      },
      {
        "slug": "res_workspaces_family_amazon_workspaces_web",
        "displayName": "Res Workspaces Family Amazon Workspaces Web",
        "category": "End User Computing",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_End-User-Computing/Res_Amazon-WorkSpaces-Family_Amazon-WorkSpaces-Web_48.svg"
      },
      {
        "slug": "appstream",
        "displayName": "Appstream",
        "category": "End User Computing",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_End-User-Computing/64/Arch_Amazon-AppStream_64.svg"
      },
      {
        "slug": "worklink",
        "displayName": "Worklink",
        "category": "End User Computing",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_End-User-Computing/64/Arch_Amazon-WorkLink_64.svg"
      },
      {
        "slug": "workspaces_family",
        "displayName": "Workspaces Family",
        "category": "End User Computing",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_End-User-Computing/64/Arch_Amazon-WorkSpaces-Family_64.svg"
      },
      {
        "slug": "workspaces_thin_client",
        "displayName": "Workspaces Thin Client",
        "category": "End User Computing",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_End-User-Computing/64/Arch_Amazon-WorkSpaces-Thin-Client_64.svg"
      }
    ],
    "Customer Enablement": [
      {
        "slug": "activate",
        "displayName": "Activate",
        "category": "Customer Enablement",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-Activate_64.svg"
      },
      {
        "slug": "iq",
        "displayName": "Iq",
        "category": "Customer Enablement",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-IQ_64.svg"
      },
      {
        "slug": "managed_services",
        "displayName": "Managed Services",
        "category": "Customer Enablement",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-Managed-Services_64.svg"
      },
      {
        "slug": "professional_services",
        "displayName": "Professional Services",
        "category": "Customer Enablement",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-Professional-Services_64.svg"
      },
      {
        "slug": "repost",
        "displayName": "Repost",
        "category": "Customer Enablement",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-rePost_64.svg"
      },
      {
        "slug": "repost_private",
        "displayName": "Repost Private",
        "category": "Customer Enablement",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-rePost-Private_64.svg"
      },
      {
        "slug": "support",
        "displayName": "Support",
        "category": "Customer Enablement",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-Support_64.svg"
      },
      {
        "slug": "training_certification",
        "displayName": "Training Certification",
        "category": "Customer Enablement",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-Training-Certification_64.svg"
      }
    ],
    "Games": [
      {
        "slug": "gamelift",
        "displayName": "Gamelift",
        "category": "Games",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Games/64/Arch_Amazon-GameLift_64.svg"
      },
      {
        "slug": "gamesparks",
        "displayName": "Gamesparks",
        "category": "Games",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Games/64/Arch_Amazon-GameSparks_64.svg"
      },
      {
        "slug": "gamekit",
        "displayName": "Gamekit",
        "category": "Games",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Games/64/Arch_AWS-GameKit_64.svg"
      },
      {
        "slug": "open_3d_engine",
        "displayName": "Open 3d Engine",
        "category": "Games",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Games/64/Arch_Open-3D-Engine_64.svg"
      }
    ],
    "Cloud Financial Management": [
      {
        "slug": "application_cost_profiler",
        "displayName": "Application Cost Profiler",
        "category": "Cloud Financial Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_AWS-Application-Cost-Profiler_64.svg"
      },
      {
        "slug": "billing_conductor",
        "displayName": "Billing Conductor",
        "category": "Cloud Financial Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_AWS-Billing-Conductor_64.svg"
      },
      {
        "slug": "budgets",
        "displayName": "Budgets",
        "category": "Cloud Financial Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_AWS-Budgets_64.svg"
      },
      {
        "slug": "cost_and_usage_report",
        "displayName": "Cost And Usage Report",
        "category": "Cloud Financial Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_AWS-Cost-and-Usage-Report_64.svg"
      },
      {
        "slug": "cost_explorer",
        "displayName": "Cost Explorer",
        "category": "Cloud Financial Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_AWS-Cost-Explorer_64.svg"
      },
      {
        "slug": "reserved_instance_reporting",
        "displayName": "Reserved Instance Reporting",
        "category": "Cloud Financial Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_Reserved-Instance-Reporting_64.svg"
      },
      {
        "slug": "savings_plans",
        "displayName": "Savings Plans",
        "category": "Cloud Financial Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_Savings-Plans_64.svg"
      }
    ],
    "Satellite": [
      {
        "slug": "ground_station",
        "displayName": "Ground Station",
        "category": "Satellite",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Satellite/64/Arch_AWS-Ground-Station_64.svg"
      }
    ]
  },
  "azure": {
    "AI & Cognitive": [
      {
        "slug": "bot_services",
        "displayName": "Bot Services",
        "category": "AI & Cognitive",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Bot-Services.svg"
      },
      {
        "slug": "cognitive_services",
        "displayName": "Cognitive Services",
        "category": "AI & Cognitive",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cognitive-Services.svg"
      }
    ],
    "Analytics": [
      {
        "slug": "analysis_services",
        "displayName": "Analysis Services",
        "category": "Analytics",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Analysis-Services.svg"
      },
      {
        "slug": "hd_insight_clusters",
        "displayName": "Hd Insight Clusters",
        "category": "Analytics",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/HD-Insight-Clusters.svg"
      },
      {
        "slug": "stream_analytics_jobs",
        "displayName": "Stream Analytics Jobs",
        "category": "Analytics",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Stream-Analytics-Jobs.svg"
      },
      {
        "slug": "time_series_data_sets",
        "displayName": "Time Series Data Sets",
        "category": "Analytics",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Time-Series-Data-Sets.svg"
      },
      {
        "slug": "time_series_insights_environments",
        "displayName": "Time Series Insights Environments",
        "category": "Analytics",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Time-Series-Insights-Environments.svg"
      },
      {
        "slug": "time_series_insights_event_sources",
        "displayName": "Time Series Insights Event Sources",
        "category": "Analytics",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Time-Series-Insights-Event-Sources.svg"
      },
      {
        "slug": "workspaces",
        "displayName": "Workspaces",
        "category": "Analytics",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Workspaces.svg"
      }
    ],
    "API Management": [
      {
        "slug": "api_management_services",
        "displayName": "Api Management Services",
        "category": "API Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/API-Management-Services.svg"
      }
    ],
    "App Services": [
      {
        "slug": "app_registrations",
        "displayName": "App Registrations",
        "category": "App Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/App-Registrations.svg"
      },
      {
        "slug": "app_service_certificates",
        "displayName": "App Service Certificates",
        "category": "App Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/App-Service-Certificates.svg"
      },
      {
        "slug": "app_service_domains",
        "displayName": "App Service Domains",
        "category": "App Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/App-Service-Domains.svg"
      },
      {
        "slug": "app_service_environments",
        "displayName": "App Service Environments",
        "category": "App Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/App-Service-Environments.svg"
      },
      {
        "slug": "app_service_plans",
        "displayName": "App Service Plans",
        "category": "App Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/App-Service-Plans.svg"
      },
      {
        "slug": "app_services",
        "displayName": "App Services",
        "category": "App Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/App-Services.svg"
      }
    ],
    "Application": [
      {
        "slug": "application_gateways",
        "displayName": "Application Gateways",
        "category": "Application",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Application-Gateways.svg"
      },
      {
        "slug": "application_insights",
        "displayName": "Application Insights",
        "category": "Application",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Application-Insights.svg"
      },
      {
        "slug": "application_security_groups",
        "displayName": "Application Security Groups",
        "category": "Application",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Application-Security-Groups.svg"
      }
    ],
    "Automation": [
      {
        "slug": "automation_accounts",
        "displayName": "Automation Accounts",
        "category": "Automation",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Automation-Accounts.svg"
      },
      {
        "slug": "module",
        "displayName": "Module",
        "category": "Automation",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Module.svg"
      },
      {
        "slug": "scheduler",
        "displayName": "Scheduler",
        "category": "Automation",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Scheduler.svg"
      }
    ],
    "Availability": [
      {
        "slug": "availability_sets",
        "displayName": "Availability Sets",
        "category": "Availability",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Availability-Sets.svg"
      }
    ],
    "Azure Services": [
      {
        "slug": "abs_member",
        "displayName": "Abs Member",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/ABS-Member.svg"
      },
      {
        "slug": "azure_active_directory",
        "displayName": "Azure Active Directory",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Active-Directory.svg"
      },
      {
        "slug": "azure_ad_b2c",
        "displayName": "Azure Ad B2c",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-AD-B2C.svg"
      },
      {
        "slug": "azure_ad_domain_services",
        "displayName": "Azure Ad Domain Services",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-AD-Domain-Services.svg"
      },
      {
        "slug": "azure_ad_roles_and_administrators",
        "displayName": "Azure Ad Roles And Administrators",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-AD-Roles-and-Administrators.svg"
      },
      {
        "slug": "azure_arc",
        "displayName": "Azure Arc",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Arc.svg"
      },
      {
        "slug": "azure_blockchain_service",
        "displayName": "Azure Blockchain Service",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Blockchain-Service.svg"
      },
      {
        "slug": "azure_cloud_shell",
        "displayName": "Azure Cloud Shell",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Cloud-Shell.svg"
      },
      {
        "slug": "azure_cosmos_db",
        "displayName": "Azure Cosmos Db",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Cosmos-DB.svg"
      },
      {
        "slug": "azure_data_catalog",
        "displayName": "Azure Data Catalog",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Data-Catalog.svg"
      },
      {
        "slug": "azure_data_explorer_clusters",
        "displayName": "Azure Data Explorer Clusters",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Data-Explorer-Clusters.svg"
      },
      {
        "slug": "azure_database_mariadb_server",
        "displayName": "Azure Database Mariadb Server",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Database-MariaDB-Server.svg"
      },
      {
        "slug": "azure_database_migration_services",
        "displayName": "Azure Database Migration Services",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Database-Migration-Services.svg"
      },
      {
        "slug": "azure_database_mysql_server",
        "displayName": "Azure Database Mysql Server",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Database-MySQL-Server.svg"
      },
      {
        "slug": "azure_database_postgresql_server",
        "displayName": "Azure Database Postgresql Server",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Database-PostgreSQL-Server.svg"
      },
      {
        "slug": "azure_devops",
        "displayName": "Azure Devops",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-DevOps.svg"
      },
      {
        "slug": "azure_firewall_manager",
        "displayName": "Azure Firewall Manager",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Firewall-Manager.svg"
      },
      {
        "slug": "azure_hcp_cache",
        "displayName": "Azure Hcp Cache",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-HCP-Cache.svg"
      },
      {
        "slug": "azure_lighthouse",
        "displayName": "Azure Lighthouse",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Lighthouse.svg"
      },
      {
        "slug": "azure_maps_accounts",
        "displayName": "Azure Maps Accounts",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Maps-Accounts.svg"
      },
      {
        "slug": "azure_media_service",
        "displayName": "Azure Media Service",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Media-Service.svg"
      },
      {
        "slug": "azure_migrate",
        "displayName": "Azure Migrate",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Migrate.svg"
      },
      {
        "slug": "azure_netapp_files",
        "displayName": "Azure Netapp Files",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-NetApp-Files.svg"
      },
      {
        "slug": "azure_sentinel",
        "displayName": "Azure Sentinel",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Sentinel.svg"
      },
      {
        "slug": "azure_sphere",
        "displayName": "Azure Sphere",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Sphere.svg"
      },
      {
        "slug": "azure_sql_server_stretch_databases",
        "displayName": "Azure Sql Server Stretch Databases",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-SQL-Server-Stretch-Databases.svg"
      },
      {
        "slug": "azure_sql_vm",
        "displayName": "Azure Sql Vm",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-SQL-VM.svg"
      },
      {
        "slug": "azure_stack",
        "displayName": "Azure Stack",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Stack.svg"
      },
      {
        "slug": "azure_stack_edge",
        "displayName": "Azure Stack Edge",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Stack-Edge.svg"
      },
      {
        "slug": "azure_synapse_analytics",
        "displayName": "Azure Synapse Analytics",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Synapse-Analytics.svg"
      },
      {
        "slug": "azure_token_service",
        "displayName": "Azure Token Service",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Token-Service.svg"
      },
      {
        "slug": "azure_workbooks",
        "displayName": "Azure Workbooks",
        "category": "Azure Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Workbooks.svg"
      }
    ],
    "Backup & Recovery": [
      {
        "slug": "infrastructure_backup",
        "displayName": "Infrastructure Backup",
        "category": "Backup & Recovery",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Infrastructure-Backup.svg"
      },
      {
        "slug": "recovery_services_vaults",
        "displayName": "Recovery Services Vaults",
        "category": "Backup & Recovery",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Recovery-Services-Vaults.svg"
      }
    ],
    "Blockchain": [
      {
        "slug": "consortium",
        "displayName": "Consortium",
        "category": "Blockchain",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Consortium.svg"
      }
    ],
    "Cache": [
      {
        "slug": "cache",
        "displayName": "Cache",
        "category": "Cache",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cache.svg"
      },
      {
        "slug": "cache_redis",
        "displayName": "Cache Redis",
        "category": "Cache",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cache-Redis.svg"
      }
    ],
    "CDN": [
      {
        "slug": "cdn_profiles",
        "displayName": "Cdn Profiles",
        "category": "CDN",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/CDN-Profiles.svg"
      }
    ],
    "Compute": [
      {
        "slug": "avs",
        "displayName": "Avs",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/AVS.svg"
      },
      {
        "slug": "batch_accounts",
        "displayName": "Batch Accounts",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Batch-Accounts.svg"
      },
      {
        "slug": "cloud_services_(classic)",
        "displayName": "Cloud Services (Classic)",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cloud-Services-(Classic).svg"
      },
      {
        "slug": "extensions",
        "displayName": "Extensions",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Extensions.svg"
      },
      {
        "slug": "function_apps",
        "displayName": "Function Apps",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Function-Apps.svg"
      },
      {
        "slug": "image",
        "displayName": "Image",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Image.svg"
      },
      {
        "slug": "image_definitions",
        "displayName": "Image Definitions",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Image-Definitions.svg"
      },
      {
        "slug": "image_versions",
        "displayName": "Image Versions",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Image-Versions.svg"
      },
      {
        "slug": "images",
        "displayName": "Images",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Images.svg"
      },
      {
        "slug": "machinesazurearc",
        "displayName": "Machinesazurearc",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/MachinesAzureArc.svg"
      },
      {
        "slug": "os_images_(classic)",
        "displayName": "Os Images (Classic)",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/OS-Images-(Classic).svg"
      },
      {
        "slug": "proximity_placement_groups",
        "displayName": "Proximity Placement Groups",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Proximity-Placement-Groups.svg"
      },
      {
        "slug": "remote_rendering",
        "displayName": "Remote Rendering",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Remote-Rendering.svg"
      },
      {
        "slug": "scale",
        "displayName": "Scale",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Scale.svg"
      },
      {
        "slug": "server_farm",
        "displayName": "Server Farm",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Server-Farm.svg"
      },
      {
        "slug": "shared_image_galleries",
        "displayName": "Shared Image Galleries",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Shared-Image-Galleries.svg"
      },
      {
        "slug": "virtual_clusters",
        "displayName": "Virtual Clusters",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-Clusters.svg"
      },
      {
        "slug": "virtual_machine",
        "displayName": "Virtual Machine",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-Machine.svg"
      },
      {
        "slug": "virtual_machines_(classic)",
        "displayName": "Virtual Machines (Classic)",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-Machines-(Classic).svg"
      },
      {
        "slug": "virtual_network_gateways",
        "displayName": "Virtual Network Gateways",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-Network-Gateways.svg"
      },
      {
        "slug": "virtual_networks",
        "displayName": "Virtual Networks",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-Networks.svg"
      },
      {
        "slug": "virtual_networks_(classic)",
        "displayName": "Virtual Networks (Classic)",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-Networks-(Classic).svg"
      },
      {
        "slug": "virtual_wans",
        "displayName": "Virtual Wans",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-WANs.svg"
      },
      {
        "slug": "vm_images_(classic)",
        "displayName": "Vm Images (Classic)",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/VM-Images-(Classic).svg"
      },
      {
        "slug": "vm_scale_sets",
        "displayName": "Vm Scale Sets",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/VM-Scale-Sets.svg"
      },
      {
        "slug": "windows_virtual_desktop",
        "displayName": "Windows Virtual Desktop",
        "category": "Compute",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Windows-Virtual-Desktop.svg"
      }
    ],
    "Containers": [
      {
        "slug": "container_instances",
        "displayName": "Container Instances",
        "category": "Containers",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Container-Instances.svg"
      },
      {
        "slug": "container_registries",
        "displayName": "Container Registries",
        "category": "Containers",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Container-Registries.svg"
      },
      {
        "slug": "container_services_(deprecated)",
        "displayName": "Container Services (Deprecated)",
        "category": "Containers",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Container-Services-(Deprecated).svg"
      },
      {
        "slug": "kubernetes_services",
        "displayName": "Kubernetes Services",
        "category": "Containers",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Kubernetes-Services.svg"
      },
      {
        "slug": "mesh_applications",
        "displayName": "Mesh Applications",
        "category": "Containers",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Mesh-Applications.svg"
      }
    ],
    "Cost Management": [
      {
        "slug": "cost_alerts",
        "displayName": "Cost Alerts",
        "category": "Cost Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cost-Alerts.svg"
      },
      {
        "slug": "cost_analysis",
        "displayName": "Cost Analysis",
        "category": "Cost Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cost-Analysis.svg"
      },
      {
        "slug": "cost_budgets",
        "displayName": "Cost Budgets",
        "category": "Cost Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cost-Budgets.svg"
      },
      {
        "slug": "cost_management",
        "displayName": "Cost Management",
        "category": "Cost Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cost-Management.svg"
      }
    ],
    "Data Services": [
      {
        "slug": "data_box",
        "displayName": "Data Box",
        "category": "Data Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Box.svg"
      },
      {
        "slug": "data_box_edge",
        "displayName": "Data Box Edge",
        "category": "Data Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Box-Edge.svg"
      },
      {
        "slug": "data_factory",
        "displayName": "Data Factory",
        "category": "Data Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Factory.svg"
      },
      {
        "slug": "data_lake_storage_gen1",
        "displayName": "Data Lake Storage Gen1",
        "category": "Data Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Lake-Storage-Gen1.svg"
      },
      {
        "slug": "data_lake_store_gen1",
        "displayName": "Data Lake Store Gen1",
        "category": "Data Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Lake-Store-Gen1.svg"
      },
      {
        "slug": "data_share_invitations",
        "displayName": "Data Share Invitations",
        "category": "Data Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Share-Invitations.svg"
      },
      {
        "slug": "data_shares",
        "displayName": "Data Shares",
        "category": "Data Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Shares.svg"
      },
      {
        "slug": "import_export_jobs",
        "displayName": "Import Export Jobs",
        "category": "Data Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Import-Export-Jobs.svg"
      }
    ],
    "Databases": [
      {
        "slug": "elastic_job_agents",
        "displayName": "Elastic Job Agents",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Elastic-Job-Agents.svg"
      },
      {
        "slug": "instance_pools",
        "displayName": "Instance Pools",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Instance-Pools.svg"
      },
      {
        "slug": "production_ready_database",
        "displayName": "Production Ready Database",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Production-Ready-Database.svg"
      },
      {
        "slug": "sql_data_warehouses",
        "displayName": "Sql Data Warehouses",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SQL-Data-Warehouses.svg"
      },
      {
        "slug": "sql_database",
        "displayName": "Sql Database",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SQL-Database.svg"
      },
      {
        "slug": "sql_elastic_pools",
        "displayName": "Sql Elastic Pools",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SQL-Elastic-Pools.svg"
      },
      {
        "slug": "sql_managed_instance",
        "displayName": "Sql Managed Instance",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SQL-Managed-Instance.svg"
      },
      {
        "slug": "sql_server",
        "displayName": "Sql Server",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SQL-Server.svg"
      }
    ],
    "Developer Tools": [
      {
        "slug": "backlog",
        "displayName": "Backlog",
        "category": "Developer Tools",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Backlog.svg"
      },
      {
        "slug": "branch",
        "displayName": "Branch",
        "category": "Developer Tools",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Branch.svg"
      },
      {
        "slug": "bug",
        "displayName": "Bug",
        "category": "Developer Tools",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Bug.svg"
      },
      {
        "slug": "builds",
        "displayName": "Builds",
        "category": "Developer Tools",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Builds.svg"
      },
      {
        "slug": "code",
        "displayName": "Code",
        "category": "Developer Tools",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Code.svg"
      },
      {
        "slug": "commit",
        "displayName": "Commit",
        "category": "Developer Tools",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Commit.svg"
      },
      {
        "slug": "dev_console",
        "displayName": "Dev Console",
        "category": "Developer Tools",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Dev-Console.svg"
      },
      {
        "slug": "devtest_labs",
        "displayName": "Devtest Labs",
        "category": "Developer Tools",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/DevTest-Labs.svg"
      },
      {
        "slug": "lab_services",
        "displayName": "Lab Services",
        "category": "Developer Tools",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Lab-Services.svg"
      },
      {
        "slug": "powershell",
        "displayName": "Powershell",
        "category": "Developer Tools",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Powershell.svg"
      },
      {
        "slug": "process_explorer",
        "displayName": "Process Explorer",
        "category": "Developer Tools",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Process-Explorer.svg"
      },
      {
        "slug": "tfs_vc_repository",
        "displayName": "Tfs Vc Repository",
        "category": "Developer Tools",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/TFS-VC-Repository.svg"
      }
    ],
    "Devices": [
      {
        "slug": "device_provisioning_services",
        "displayName": "Device Provisioning Services",
        "category": "Devices",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Device-Provisioning-Services.svg"
      },
      {
        "slug": "device_security_apple",
        "displayName": "Device Security Apple",
        "category": "Devices",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Device-Security-Apple.svg"
      },
      {
        "slug": "device_security_google",
        "displayName": "Device Security Google",
        "category": "Devices",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Device-Security-Google.svg"
      },
      {
        "slug": "device_security_windows",
        "displayName": "Device Security Windows",
        "category": "Devices",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Device-Security-Windows.svg"
      }
    ],
    "Enterprise": [
      {
        "slug": "sap_azure_monitor",
        "displayName": "Sap Azure Monitor",
        "category": "Enterprise",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SAP-Azure-Monitor.svg"
      }
    ],
    "Events & Messaging": [
      {
        "slug": "event_grid_domains",
        "displayName": "Event Grid Domains",
        "category": "Events & Messaging",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Event-Grid-Domains.svg"
      },
      {
        "slug": "event_grid_subscriptions",
        "displayName": "Event Grid Subscriptions",
        "category": "Events & Messaging",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Event-Grid-Subscriptions.svg"
      },
      {
        "slug": "event_grid_topics",
        "displayName": "Event Grid Topics",
        "category": "Events & Messaging",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Event-Grid-Topics.svg"
      },
      {
        "slug": "event_hub_clusters",
        "displayName": "Event Hub Clusters",
        "category": "Events & Messaging",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Event-Hub-Clusters.svg"
      },
      {
        "slug": "event_hubs",
        "displayName": "Event Hubs",
        "category": "Events & Messaging",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Event-Hubs.svg"
      },
      {
        "slug": "notification_hub_namespaces",
        "displayName": "Notification Hub Namespaces",
        "category": "Events & Messaging",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Notification-Hub-Namespaces.svg"
      },
      {
        "slug": "notification_hubs",
        "displayName": "Notification Hubs",
        "category": "Events & Messaging",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Notification-Hubs.svg"
      },
      {
        "slug": "relays",
        "displayName": "Relays",
        "category": "Events & Messaging",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Relays.svg"
      }
    ],
    "Identity": [
      {
        "slug": "active_directory_connect_health",
        "displayName": "Active Directory Connect Health",
        "category": "Identity",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Active-Directory-Connect-Health.svg"
      },
      {
        "slug": "conditional_access",
        "displayName": "Conditional Access",
        "category": "Identity",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Conditional-Access.svg"
      },
      {
        "slug": "enterprise_applications",
        "displayName": "Enterprise Applications",
        "category": "Identity",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Enterprise-Applications.svg"
      },
      {
        "slug": "groups",
        "displayName": "Groups",
        "category": "Identity",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Groups.svg"
      },
      {
        "slug": "identity_governance",
        "displayName": "Identity Governance",
        "category": "Identity",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Identity-Governance.svg"
      },
      {
        "slug": "multi_tenancy",
        "displayName": "Multi Tenancy",
        "category": "Identity",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Multi-Tenancy.svg"
      },
      {
        "slug": "user_privacy",
        "displayName": "User Privacy",
        "category": "Identity",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/User-Privacy.svg"
      },
      {
        "slug": "user_subscriptions",
        "displayName": "User Subscriptions",
        "category": "Identity",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/User-Subscriptions.svg"
      },
      {
        "slug": "users",
        "displayName": "Users",
        "category": "Identity",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Users.svg"
      }
    ],
    "Integration": [
      {
        "slug": "biz_talk",
        "displayName": "Biz Talk",
        "category": "Integration",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Biz-Talk.svg"
      },
      {
        "slug": "integration_accounts",
        "displayName": "Integration Accounts",
        "category": "Integration",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Integration-Accounts.svg"
      },
      {
        "slug": "logic_apps",
        "displayName": "Logic Apps",
        "category": "Integration",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Logic-Apps.svg"
      },
      {
        "slug": "workflow",
        "displayName": "Workflow",
        "category": "Integration",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Workflow.svg"
      }
    ],
    "IoT": [
      {
        "slug": "digital_twins",
        "displayName": "Digital Twins",
        "category": "IoT",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Digital-Twins.svg"
      },
      {
        "slug": "iot_central_applications",
        "displayName": "Iot Central Applications",
        "category": "IoT",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/IoT-Central-Applications.svg"
      },
      {
        "slug": "iot_edge",
        "displayName": "Iot Edge",
        "category": "IoT",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/IoT-Edge.svg"
      },
      {
        "slug": "iot_hub",
        "displayName": "Iot Hub",
        "category": "IoT",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/IoT-Hub.svg"
      },
      {
        "slug": "journey_hub",
        "displayName": "Journey Hub",
        "category": "IoT",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Journey-Hub.svg"
      },
      {
        "slug": "rtos",
        "displayName": "Rtos",
        "category": "IoT",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/RTOS.svg"
      }
    ],
    "Managed Services": [
      {
        "slug": "managed_applications_center",
        "displayName": "Managed Applications Center",
        "category": "Managed Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Managed-Applications-Center.svg"
      },
      {
        "slug": "managed_database",
        "displayName": "Managed Database",
        "category": "Managed Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Managed-Database.svg"
      }
    ],
    "Management": [
      {
        "slug": "advisor",
        "displayName": "Advisor",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Advisor.svg"
      },
      {
        "slug": "blueprints",
        "displayName": "Blueprints",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Blueprints.svg"
      },
      {
        "slug": "capacity",
        "displayName": "Capacity",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Capacity.svg"
      },
      {
        "slug": "management_groups",
        "displayName": "Management Groups",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Management-Groups.svg"
      },
      {
        "slug": "management_portal",
        "displayName": "Management Portal",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Management-Portal.svg"
      },
      {
        "slug": "my_customers",
        "displayName": "My Customers",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/My-Customers.svg"
      },
      {
        "slug": "plans",
        "displayName": "Plans",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Plans.svg"
      },
      {
        "slug": "policy",
        "displayName": "Policy",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Policy.svg"
      },
      {
        "slug": "reservations",
        "displayName": "Reservations",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Reservations.svg"
      },
      {
        "slug": "solutions",
        "displayName": "Solutions",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Solutions.svg"
      },
      {
        "slug": "subscriptions",
        "displayName": "Subscriptions",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Subscriptions.svg"
      },
      {
        "slug": "tags",
        "displayName": "Tags",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Tags.svg"
      },
      {
        "slug": "updates",
        "displayName": "Updates",
        "category": "Management",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Updates.svg"
      }
    ],
    "Marketplace": [
      {
        "slug": "marketplace",
        "displayName": "Marketplace",
        "category": "Marketplace",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Marketplace.svg"
      },
      {
        "slug": "offers",
        "displayName": "Offers",
        "category": "Marketplace",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Offers.svg"
      },
      {
        "slug": "software_as_a_service",
        "displayName": "Software As A Service",
        "category": "Marketplace",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Software-as-a-Service.svg"
      }
    ],
    "Media": [
      {
        "slug": "media",
        "displayName": "Media",
        "category": "Media",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Media.svg"
      },
      {
        "slug": "media_file",
        "displayName": "Media File",
        "category": "Media",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Media-File.svg"
      }
    ],
    "Mobile": [
      {
        "slug": "mobile",
        "displayName": "Mobile",
        "category": "Mobile",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Mobile.svg"
      },
      {
        "slug": "mobile_engagement",
        "displayName": "Mobile Engagement",
        "category": "Mobile",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Mobile-Engagement.svg"
      }
    ],
    "Monitoring": [
      {
        "slug": "activity_log",
        "displayName": "Activity Log",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Activity-Log.svg"
      },
      {
        "slug": "alerts",
        "displayName": "Alerts",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Alerts.svg"
      },
      {
        "slug": "diagnostics_settings",
        "displayName": "Diagnostics Settings",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Diagnostics-Settings.svg"
      },
      {
        "slug": "log_analytics_workspaces",
        "displayName": "Log Analytics Workspaces",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Log-Analytics-Workspaces.svg"
      },
      {
        "slug": "log_streaming",
        "displayName": "Log Streaming",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Log-Streaming.svg"
      },
      {
        "slug": "metrics",
        "displayName": "Metrics",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Metrics.svg"
      },
      {
        "slug": "monitor",
        "displayName": "Monitor",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Monitor.svg"
      },
      {
        "slug": "operation_log_(classic)",
        "displayName": "Operation Log (Classic)",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Operation-Log-(Classic).svg"
      },
      {
        "slug": "workbooks",
        "displayName": "Workbooks",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Workbooks.svg"
      }
    ],
    "Networking": [
      {
        "slug": "connections",
        "displayName": "Connections",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Connections.svg"
      },
      {
        "slug": "dns_zones",
        "displayName": "Dns Zones",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/DNS-Zones.svg"
      },
      {
        "slug": "expressroute_circuits",
        "displayName": "Expressroute Circuits",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/ExpressRoute-Circuits.svg"
      },
      {
        "slug": "front_doors",
        "displayName": "Front Doors",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Front-Doors.svg"
      },
      {
        "slug": "ftp",
        "displayName": "Ftp",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/FTP.svg"
      },
      {
        "slug": "internet_analyzer_profiles",
        "displayName": "Internet Analyzer Profiles",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Internet-Analyzer-Profiles.svg"
      },
      {
        "slug": "ip_groups",
        "displayName": "Ip Groups",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/IP-Groups.svg"
      },
      {
        "slug": "load_balancers",
        "displayName": "Load Balancers",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Load-Balancers.svg"
      },
      {
        "slug": "load_test",
        "displayName": "Load Test",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Load-Test.svg"
      },
      {
        "slug": "nat",
        "displayName": "Nat",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/NAT.svg"
      },
      {
        "slug": "network_interfaces",
        "displayName": "Network Interfaces",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Network-Interfaces.svg"
      },
      {
        "slug": "network_security_groups",
        "displayName": "Network Security Groups",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Network-Security-Groups.svg"
      },
      {
        "slug": "network_watcher",
        "displayName": "Network Watcher",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Network-Watcher.svg"
      },
      {
        "slug": "outbound_connection",
        "displayName": "Outbound Connection",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Outbound-Connection.svg"
      },
      {
        "slug": "peering_service",
        "displayName": "Peering Service",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Peering-Service.svg"
      },
      {
        "slug": "private_link",
        "displayName": "Private Link",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Private-Link.svg"
      },
      {
        "slug": "private_link_hub",
        "displayName": "Private Link Hub",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Private-Link-Hub.svg"
      },
      {
        "slug": "private_link_service",
        "displayName": "Private Link Service",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Private-Link-Service.svg"
      },
      {
        "slug": "public_ip_addresses",
        "displayName": "Public Ip Addresses",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Public-IP-Addresses.svg"
      },
      {
        "slug": "public_ip_addresses_(classic)",
        "displayName": "Public Ip Addresses (Classic)",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Public-IP-Addresses-(Classic).svg"
      },
      {
        "slug": "public_ip_prefixes",
        "displayName": "Public Ip Prefixes",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Public-IP-Prefixes.svg"
      },
      {
        "slug": "reserved_ip_addresses_(classic)",
        "displayName": "Reserved Ip Addresses (Classic)",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Reserved-IP-Addresses-(Classic).svg"
      },
      {
        "slug": "route_filters",
        "displayName": "Route Filters",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Route-Filters.svg"
      },
      {
        "slug": "route_tables",
        "displayName": "Route Tables",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Route-Tables.svg"
      },
      {
        "slug": "traffic_manager_profiles",
        "displayName": "Traffic Manager Profiles",
        "category": "Networking",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Traffic-Manager-Profiles.svg"
      }
    ],
    "Other": [
      {
        "slug": "elixir_purple",
        "displayName": "Elixir Purple",
        "category": "Other",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Elixir-Purple.svg"
      }
    ],
    "Resources": [
      {
        "slug": "all_resources",
        "displayName": "All Resources",
        "category": "Resources",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/All-Resources.svg"
      },
      {
        "slug": "resource_graph_explorer",
        "displayName": "Resource Graph Explorer",
        "category": "Resources",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Resource-Graph-Explorer.svg"
      },
      {
        "slug": "resource_group_list",
        "displayName": "Resource Group List",
        "category": "Resources",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Resource-Group-List.svg"
      },
      {
        "slug": "resource_groups",
        "displayName": "Resource Groups",
        "category": "Resources",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Resource-Groups.svg"
      },
      {
        "slug": "resource_linked",
        "displayName": "Resource Linked",
        "category": "Resources",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Resource-Linked.svg"
      }
    ],
    "Search": [
      {
        "slug": "search",
        "displayName": "Search",
        "category": "Search",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Search.svg"
      },
      {
        "slug": "search_grid",
        "displayName": "Search Grid",
        "category": "Search",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Search-Grid.svg"
      },
      {
        "slug": "search_services",
        "displayName": "Search Services",
        "category": "Search",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Search-Services.svg"
      }
    ],
    "Security": [
      {
        "slug": "compliance",
        "displayName": "Compliance",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Compliance.svg"
      },
      {
        "slug": "ddos_protection_plans",
        "displayName": "Ddos Protection Plans",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/DDoS-Protection-Plans.svg"
      },
      {
        "slug": "detonation",
        "displayName": "Detonation",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Detonation.svg"
      },
      {
        "slug": "extendedsecurityupdates",
        "displayName": "Extendedsecurityupdates",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/ExtendedSecurityUpdates.svg"
      },
      {
        "slug": "firewalls",
        "displayName": "Firewalls",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Firewalls.svg"
      },
      {
        "slug": "key_vaults",
        "displayName": "Key Vaults",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Key-Vaults.svg"
      },
      {
        "slug": "keys",
        "displayName": "Keys",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Keys.svg"
      },
      {
        "slug": "security_center",
        "displayName": "Security Center",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Security-Center.svg"
      }
    ],
    "Service Bus": [
      {
        "slug": "service_bus",
        "displayName": "Service Bus",
        "category": "Service Bus",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Service-Bus.svg"
      },
      {
        "slug": "service_endpoint_policies",
        "displayName": "Service Endpoint Policies",
        "category": "Service Bus",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Service-Endpoint-Policies.svg"
      },
      {
        "slug": "service_fabric_clusters",
        "displayName": "Service Fabric Clusters",
        "category": "Service Bus",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Service-Fabric-Clusters.svg"
      },
      {
        "slug": "service_health",
        "displayName": "Service Health",
        "category": "Service Bus",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Service-Health.svg"
      },
      {
        "slug": "service_providers",
        "displayName": "Service Providers",
        "category": "Service Bus",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Service-Providers.svg"
      }
    ],
    "Services": [
      {
        "slug": "education",
        "displayName": "Education",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Education.svg"
      },
      {
        "slug": "learn",
        "displayName": "Learn",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Learn.svg"
      },
      {
        "slug": "universal_print",
        "displayName": "Universal Print",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Universal-Print.svg"
      }
    ],
    "Storage": [
      {
        "slug": "blob_block",
        "displayName": "Blob Block",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Blob-Block.svg"
      },
      {
        "slug": "blob_page",
        "displayName": "Blob Page",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Blob-Page.svg"
      },
      {
        "slug": "disk_encryption_sets",
        "displayName": "Disk Encryption Sets",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Disk-Encryption-Sets.svg"
      },
      {
        "slug": "disks",
        "displayName": "Disks",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Disks.svg"
      },
      {
        "slug": "disks_(classic)",
        "displayName": "Disks (Classic)",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Disks-(Classic).svg"
      },
      {
        "slug": "disks_snapshots",
        "displayName": "Disks Snapshots",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Disks-Snapshots.svg"
      },
      {
        "slug": "file",
        "displayName": "File",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/File.svg"
      },
      {
        "slug": "files",
        "displayName": "Files",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Files.svg"
      },
      {
        "slug": "ssd",
        "displayName": "Ssd",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SSD.svg"
      },
      {
        "slug": "storage_accounts",
        "displayName": "Storage Accounts",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Storage-Accounts.svg"
      },
      {
        "slug": "storage_accounts_(classic)",
        "displayName": "Storage Accounts (Classic)",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Storage-Accounts-(Classic).svg"
      },
      {
        "slug": "storage_azure_files",
        "displayName": "Storage Azure Files",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Storage-Azure-Files.svg"
      },
      {
        "slug": "storage_container",
        "displayName": "Storage Container",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Storage-Container.svg"
      },
      {
        "slug": "storage_queue",
        "displayName": "Storage Queue",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Storage-Queue.svg"
      },
      {
        "slug": "storage_sync_services",
        "displayName": "Storage Sync Services",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Storage-Sync-Services.svg"
      },
      {
        "slug": "storsimple_data_managers",
        "displayName": "Storsimple Data Managers",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/StorSimple-Data-Managers.svg"
      },
      {
        "slug": "storsimple_device_managers",
        "displayName": "Storsimple Device Managers",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/StorSimple-Device-Managers.svg"
      },
      {
        "slug": "table",
        "displayName": "Table",
        "category": "Storage",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Table.svg"
      }
    ],
    "UI Elements": [
      {
        "slug": "browser",
        "displayName": "Browser",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Browser.svg"
      },
      {
        "slug": "controls",
        "displayName": "Controls",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Controls.svg"
      },
      {
        "slug": "controls_horizontal",
        "displayName": "Controls Horizontal",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Controls-Horizontal.svg"
      },
      {
        "slug": "counter",
        "displayName": "Counter",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Counter.svg"
      },
      {
        "slug": "cubes",
        "displayName": "Cubes",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cubes.svg"
      },
      {
        "slug": "dashboard",
        "displayName": "Dashboard",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Dashboard.svg"
      },
      {
        "slug": "download",
        "displayName": "Download",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Download.svg"
      },
      {
        "slug": "error",
        "displayName": "Error",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Error.svg"
      },
      {
        "slug": "folder_blank",
        "displayName": "Folder Blank",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Folder-Blank.svg"
      },
      {
        "slug": "folder_website",
        "displayName": "Folder Website",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Folder-Website.svg"
      },
      {
        "slug": "gear",
        "displayName": "Gear",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Gear.svg"
      },
      {
        "slug": "globe",
        "displayName": "Globe",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Globe.svg"
      },
      {
        "slug": "globe_error",
        "displayName": "Globe Error",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Globe-Error.svg"
      },
      {
        "slug": "globe_success",
        "displayName": "Globe Success",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Globe-Success.svg"
      },
      {
        "slug": "globe_warning",
        "displayName": "Globe Warning",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Globe-Warning.svg"
      },
      {
        "slug": "guide",
        "displayName": "Guide",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Guide.svg"
      },
      {
        "slug": "heart",
        "displayName": "Heart",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Heart.svg"
      },
      {
        "slug": "help_and_support",
        "displayName": "Help And Support",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Help-and-Support.svg"
      },
      {
        "slug": "information",
        "displayName": "Information",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Information.svg"
      },
      {
        "slug": "input_output",
        "displayName": "Input Output",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Input-Output.svg"
      },
      {
        "slug": "launch_portal",
        "displayName": "Launch Portal",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Launch-Portal.svg"
      },
      {
        "slug": "location",
        "displayName": "Location",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Location.svg"
      },
      {
        "slug": "power",
        "displayName": "Power",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Power.svg"
      },
      {
        "slug": "power_up",
        "displayName": "Power Up",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Power-Up.svg"
      },
      {
        "slug": "preview",
        "displayName": "Preview",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Preview.svg"
      },
      {
        "slug": "quickstart_center",
        "displayName": "Quickstart Center",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Quickstart-Center.svg"
      },
      {
        "slug": "recent",
        "displayName": "Recent",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Recent.svg"
      },
      {
        "slug": "toolbox",
        "displayName": "Toolbox",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Toolbox.svg"
      },
      {
        "slug": "versions",
        "displayName": "Versions",
        "category": "UI Elements",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Versions.svg"
      }
    ],
    "Web Services": [
      {
        "slug": "static_apps",
        "displayName": "Static Apps",
        "category": "Web Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Static-Apps.svg"
      },
      {
        "slug": "web_application_firewall_policies(waf)",
        "displayName": "Web Application Firewall Policies(Waf)",
        "category": "Web Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Web-Application-Firewall-Policies(WAF).svg"
      },
      {
        "slug": "web_environment",
        "displayName": "Web Environment",
        "category": "Web Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Web-Environment.svg"
      },
      {
        "slug": "web_slots",
        "displayName": "Web Slots",
        "category": "Web Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Web-Slots.svg"
      },
      {
        "slug": "web_test",
        "displayName": "Web Test",
        "category": "Web Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Web-Test.svg"
      },
      {
        "slug": "website_power",
        "displayName": "Website Power",
        "category": "Web Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Website-Power.svg"
      },
      {
        "slug": "website_staging",
        "displayName": "Website Staging",
        "category": "Web Services",
        "externalUrl": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Website-Staging.svg"
      }
    ]
  },
  "google-cloud": {
    "AI & ML": [
      {
        "slug": "advanced_agent_modeling",
        "displayName": "Advanced Agent Modeling",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/advanced_agent_modeling.svg"
      },
      {
        "slug": "advanced_solutions_lab",
        "displayName": "Advanced Solutions Lab",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/advanced_solutions_lab.svg"
      },
      {
        "slug": "agent_assist",
        "displayName": "Agent Assist",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/agent_assist.svg"
      },
      {
        "slug": "ai_hub",
        "displayName": "Ai Hub",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/ai_hub.svg"
      },
      {
        "slug": "ai_platform",
        "displayName": "Ai Platform",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/ai_platform.svg"
      },
      {
        "slug": "ai_platform_unified",
        "displayName": "Ai Platform Unified",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/ai_platform_unified.svg"
      },
      {
        "slug": "automl",
        "displayName": "Automl",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/automl.svg"
      },
      {
        "slug": "automl_natural_language",
        "displayName": "Automl Natural Language",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/automl_natural_language.svg"
      },
      {
        "slug": "automl_tables",
        "displayName": "Automl Tables",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/automl_tables.svg"
      },
      {
        "slug": "automl_translation",
        "displayName": "Automl Translation",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/automl_translation.svg"
      },
      {
        "slug": "automl_video_intelligence",
        "displayName": "Automl Video Intelligence",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/automl_video_intelligence.svg"
      },
      {
        "slug": "automl_vision",
        "displayName": "Automl Vision",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/automl_vision.svg"
      },
      {
        "slug": "cloud_inference_api",
        "displayName": "Cloud Inference Api",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_inference_api.svg"
      },
      {
        "slug": "cloud_jobs_api",
        "displayName": "Cloud Jobs Api",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_jobs_api.svg"
      },
      {
        "slug": "cloud_natural_language_api",
        "displayName": "Cloud Natural Language Api",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_natural_language_api.svg"
      },
      {
        "slug": "cloud_optimization_ai",
        "displayName": "Cloud Optimization Ai",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_optimization_ai.svg"
      },
      {
        "slug": "cloud_optimization_ai_-_fleet_routing_api",
        "displayName": "Cloud Optimization Ai - Fleet Routing Api",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_optimization_ai_-_fleet_routing_api.svg"
      },
      {
        "slug": "cloud_translation_api",
        "displayName": "Cloud Translation Api",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_translation_api.svg"
      },
      {
        "slug": "cloud_vision_api",
        "displayName": "Cloud Vision Api",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_vision_api.svg"
      },
      {
        "slug": "dialogflow",
        "displayName": "Dialogflow",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dialogflow.svg"
      },
      {
        "slug": "dialogflow_cx",
        "displayName": "Dialogflow Cx",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dialogflow_cx.svg"
      },
      {
        "slug": "dialogflow_insights",
        "displayName": "Dialogflow Insights",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dialogflow_insights.svg"
      },
      {
        "slug": "document_ai",
        "displayName": "Document Ai",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/document_ai.svg"
      },
      {
        "slug": "recommendations_ai",
        "displayName": "Recommendations Ai",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/recommendations_ai.svg"
      },
      {
        "slug": "speech-to-text",
        "displayName": "Speech-To-Text",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/speech-to-text.svg"
      },
      {
        "slug": "tensorflow_enterprise",
        "displayName": "Tensorflow Enterprise",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/tensorflow_enterprise.svg"
      },
      {
        "slug": "text-to-speech",
        "displayName": "Text-To-Speech",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/text-to-speech.svg"
      },
      {
        "slug": "vertexai",
        "displayName": "Vertexai",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/vertexai.svg"
      },
      {
        "slug": "video_intelligence_api",
        "displayName": "Video Intelligence Api",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/video_intelligence_api.svg"
      },
      {
        "slug": "visual_inspection",
        "displayName": "Visual Inspection",
        "category": "AI & ML",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/visual_inspection.svg"
      }
    ],
    "Analytics": [
      {
        "slug": "analytics_hub",
        "displayName": "Analytics Hub",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/analytics_hub.svg"
      },
      {
        "slug": "bigquery",
        "displayName": "Bigquery",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/bigquery.svg"
      },
      {
        "slug": "looker",
        "displayName": "Looker",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/looker.svg"
      },
      {
        "slug": "real-world_insights",
        "displayName": "Real-World Insights",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/real-world_insights.svg"
      },
      {
        "slug": "stream_suite",
        "displayName": "Stream Suite",
        "category": "Analytics",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/stream_suite.svg"
      }
    ],
    "API Services": [
      {
        "slug": "api",
        "displayName": "Api",
        "category": "API Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/api.svg"
      },
      {
        "slug": "api_analytics",
        "displayName": "Api Analytics",
        "category": "API Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/api_analytics.svg"
      },
      {
        "slug": "api_monetization",
        "displayName": "Api Monetization",
        "category": "API Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/api_monetization.svg"
      },
      {
        "slug": "apigee_api_platform",
        "displayName": "Apigee Api Platform",
        "category": "API Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/apigee_api_platform.svg"
      },
      {
        "slug": "apigee_sense",
        "displayName": "Apigee Sense",
        "category": "API Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/apigee_sense.svg"
      },
      {
        "slug": "cloud_api_gateway",
        "displayName": "Cloud Api Gateway",
        "category": "API Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_api_gateway.svg"
      },
      {
        "slug": "cloud_apis",
        "displayName": "Cloud Apis",
        "category": "API Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_apis.svg"
      },
      {
        "slug": "cloud_endpoints",
        "displayName": "Cloud Endpoints",
        "category": "API Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_endpoints.svg"
      },
      {
        "slug": "producer_portal",
        "displayName": "Producer Portal",
        "category": "API Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/producer_portal.svg"
      }
    ],
    "Compute": [
      {
        "slug": "app_engine",
        "displayName": "App Engine",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/app_engine.svg"
      },
      {
        "slug": "bare_metal_solutions",
        "displayName": "Bare Metal Solutions",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/bare_metal_solutions.svg"
      },
      {
        "slug": "batch",
        "displayName": "Batch",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/batch.svg"
      },
      {
        "slug": "cloud_functions",
        "displayName": "Cloud Functions",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_functions.svg"
      },
      {
        "slug": "cloud_gpu",
        "displayName": "Cloud Gpu",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_gpu.svg"
      },
      {
        "slug": "cloud_run",
        "displayName": "Cloud Run",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_run.svg"
      },
      {
        "slug": "cloud_run_for_anthos",
        "displayName": "Cloud Run For Anthos",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_run_for_anthos.svg"
      },
      {
        "slug": "cloud_scheduler",
        "displayName": "Cloud Scheduler",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_scheduler.svg"
      },
      {
        "slug": "cloud_tasks",
        "displayName": "Cloud Tasks",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_tasks.svg"
      },
      {
        "slug": "cloud_tpu",
        "displayName": "Cloud Tpu",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_tpu.svg"
      },
      {
        "slug": "compute_engine",
        "displayName": "Compute Engine",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/compute_engine.svg"
      },
      {
        "slug": "os_configuration_management",
        "displayName": "Os Configuration Management",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/os_configuration_management.svg"
      },
      {
        "slug": "os_inventory_management",
        "displayName": "Os Inventory Management",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/os_inventory_management.svg"
      },
      {
        "slug": "os_patch_management",
        "displayName": "Os Patch Management",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/os_patch_management.svg"
      },
      {
        "slug": "quantum_engine",
        "displayName": "Quantum Engine",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/quantum_engine.svg"
      },
      {
        "slug": "vmware_engine",
        "displayName": "Vmware Engine",
        "category": "Compute",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/vmware_engine.svg"
      }
    ],
    "Containers": [
      {
        "slug": "anthos",
        "displayName": "Anthos",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/anthos.svg"
      },
      {
        "slug": "anthos_config_management",
        "displayName": "Anthos Config Management",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/anthos_config_management.svg"
      },
      {
        "slug": "anthos_service_mesh",
        "displayName": "Anthos Service Mesh",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/anthos_service_mesh.svg"
      },
      {
        "slug": "container_optimized_os",
        "displayName": "Container Optimized Os",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/container_optimized_os.svg"
      },
      {
        "slug": "container_registry",
        "displayName": "Container Registry",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/container_registry.svg"
      },
      {
        "slug": "gke_on-prem",
        "displayName": "Gke On-Prem",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/gke_on-prem.svg"
      },
      {
        "slug": "kuberun",
        "displayName": "Kuberun",
        "category": "Containers",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/kuberun.svg"
      }
    ],
    "Data Services": [
      {
        "slug": "catalog",
        "displayName": "Catalog",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/catalog.svg"
      },
      {
        "slug": "cloud_composer",
        "displayName": "Cloud Composer",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_composer.svg"
      },
      {
        "slug": "cloud_data_fusion",
        "displayName": "Cloud Data Fusion",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_data_fusion.svg"
      },
      {
        "slug": "data_catalog",
        "displayName": "Data Catalog",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_catalog.svg"
      },
      {
        "slug": "data_labeling",
        "displayName": "Data Labeling",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_labeling.svg"
      },
      {
        "slug": "data_layers",
        "displayName": "Data Layers",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_layers.svg"
      },
      {
        "slug": "data_loss_prevention_api",
        "displayName": "Data Loss Prevention Api",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_loss_prevention_api.svg"
      },
      {
        "slug": "data_qna",
        "displayName": "Data Qna",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_qna.svg"
      },
      {
        "slug": "data_studio",
        "displayName": "Data Studio",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_studio.svg"
      },
      {
        "slug": "data_transfer",
        "displayName": "Data Transfer",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_transfer.svg"
      },
      {
        "slug": "dataflow",
        "displayName": "Dataflow",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dataflow.svg"
      },
      {
        "slug": "datalab",
        "displayName": "Datalab",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/datalab.svg"
      },
      {
        "slug": "dataplex",
        "displayName": "Dataplex",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dataplex.svg"
      },
      {
        "slug": "datapol",
        "displayName": "Datapol",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/datapol.svg"
      },
      {
        "slug": "dataprep",
        "displayName": "Dataprep",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dataprep.svg"
      },
      {
        "slug": "dataproc",
        "displayName": "Dataproc",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dataproc.svg"
      },
      {
        "slug": "dataproc_metastore",
        "displayName": "Dataproc Metastore",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dataproc_metastore.svg"
      },
      {
        "slug": "datashare",
        "displayName": "Datashare",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/datashare.svg"
      },
      {
        "slug": "datastream",
        "displayName": "Datastream",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/datastream.svg"
      },
      {
        "slug": "transfer",
        "displayName": "Transfer",
        "category": "Data Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/transfer.svg"
      }
    ],
    "Databases": [
      {
        "slug": "bigtable",
        "displayName": "Bigtable",
        "category": "Databases",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/bigtable.svg"
      },
      {
        "slug": "cloud_spanner",
        "displayName": "Cloud Spanner",
        "category": "Databases",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_spanner.svg"
      },
      {
        "slug": "cloud_sql",
        "displayName": "Cloud Sql",
        "category": "Databases",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_sql.svg"
      },
      {
        "slug": "database_migration_service",
        "displayName": "Database Migration Service",
        "category": "Databases",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/database_migration_service.svg"
      },
      {
        "slug": "datastore",
        "displayName": "Datastore",
        "category": "Databases",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/datastore.svg"
      },
      {
        "slug": "firestore",
        "displayName": "Firestore",
        "category": "Databases",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/firestore.svg"
      },
      {
        "slug": "memorystore",
        "displayName": "Memorystore",
        "category": "Databases",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/memorystore.svg"
      }
    ],
    "Developer Tools": [
      {
        "slug": "artifact_registry",
        "displayName": "Artifact Registry",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/artifact_registry.svg"
      },
      {
        "slug": "cloud_build",
        "displayName": "Cloud Build",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_build.svg"
      },
      {
        "slug": "cloud_code",
        "displayName": "Cloud Code",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_code.svg"
      },
      {
        "slug": "cloud_deploy",
        "displayName": "Cloud Deploy",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_deploy.svg"
      },
      {
        "slug": "cloud_shell",
        "displayName": "Cloud Shell",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_shell.svg"
      },
      {
        "slug": "cloud_test_lab",
        "displayName": "Cloud Test Lab",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_test_lab.svg"
      },
      {
        "slug": "debugger",
        "displayName": "Debugger",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/debugger.svg"
      },
      {
        "slug": "developer_portal",
        "displayName": "Developer Portal",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/developer_portal.svg"
      },
      {
        "slug": "profiler",
        "displayName": "Profiler",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/profiler.svg"
      },
      {
        "slug": "release_notes",
        "displayName": "Release Notes",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/release_notes.svg"
      },
      {
        "slug": "tools_for_powershell",
        "displayName": "Tools For Powershell",
        "category": "Developer Tools",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/tools_for_powershell.svg"
      }
    ],
    "Events": [
      {
        "slug": "eventarc",
        "displayName": "Eventarc",
        "category": "Events",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/eventarc.svg"
      },
      {
        "slug": "pubsub",
        "displayName": "Pubsub",
        "category": "Events",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/pubsub.svg"
      }
    ],
    "Gaming": [
      {
        "slug": "game_servers",
        "displayName": "Game Servers",
        "category": "Gaming",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/game_servers.svg"
      }
    ],
    "General": [
      {
        "slug": "cloud_generic",
        "displayName": "Cloud Generic",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_generic.svg"
      },
      {
        "slug": "early_access_center",
        "displayName": "Early Access Center",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/early_access_center.svg"
      },
      {
        "slug": "free_trial",
        "displayName": "Free Trial",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/free_trial.svg"
      },
      {
        "slug": "home",
        "displayName": "Home",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/home.svg"
      },
      {
        "slug": "launcher",
        "displayName": "Launcher",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/launcher.svg"
      },
      {
        "slug": "my_cloud",
        "displayName": "My Cloud",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/my_cloud.svg"
      },
      {
        "slug": "onboarding",
        "displayName": "Onboarding",
        "category": "General",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/onboarding.svg"
      }
    ],
    "Google Services": [
      {
        "slug": "google_cloud_marketplace",
        "displayName": "Google Cloud Marketplace",
        "category": "Google Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/google_cloud_marketplace.svg"
      },
      {
        "slug": "google_kubernetes_engine",
        "displayName": "Google Kubernetes Engine",
        "category": "Google Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/google_kubernetes_engine.svg"
      },
      {
        "slug": "google_maps_platform",
        "displayName": "Google Maps Platform",
        "category": "Google Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/google_maps_platform.svg"
      }
    ],
    "Healthcare": [
      {
        "slug": "cloud_healthcare_api",
        "displayName": "Cloud Healthcare Api",
        "category": "Healthcare",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_healthcare_api.svg"
      },
      {
        "slug": "cloud_healthcare_marketplace",
        "displayName": "Cloud Healthcare Marketplace",
        "category": "Healthcare",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_healthcare_marketplace.svg"
      },
      {
        "slug": "genomics",
        "displayName": "Genomics",
        "category": "Healthcare",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/genomics.svg"
      },
      {
        "slug": "healthcare_nlp_api",
        "displayName": "Healthcare Nlp Api",
        "category": "Healthcare",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/healthcare_nlp_api.svg"
      }
    ],
    "Identity": [
      {
        "slug": "identity_and_access_management",
        "displayName": "Identity And Access Management",
        "category": "Identity",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/identity_and_access_management.svg"
      },
      {
        "slug": "identity_platform",
        "displayName": "Identity Platform",
        "category": "Identity",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/identity_platform.svg"
      },
      {
        "slug": "identity-aware_proxy",
        "displayName": "Identity-Aware Proxy",
        "category": "Identity",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/identity-aware_proxy.svg"
      },
      {
        "slug": "managed_service_for_microsoft_active_directory",
        "displayName": "Managed Service For Microsoft Active Directory",
        "category": "Identity",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/managed_service_for_microsoft_active_directory.svg"
      },
      {
        "slug": "permissions",
        "displayName": "Permissions",
        "category": "Identity",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/permissions.svg"
      },
      {
        "slug": "user_preferences",
        "displayName": "User Preferences",
        "category": "Identity",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/user_preferences.svg"
      },
      {
        "slug": "workload_identity_pool",
        "displayName": "Workload Identity Pool",
        "category": "Identity",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/workload_identity_pool.svg"
      }
    ],
    "Integration": [
      {
        "slug": "connectors",
        "displayName": "Connectors",
        "category": "Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/connectors.svg"
      },
      {
        "slug": "workflows",
        "displayName": "Workflows",
        "category": "Integration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/workflows.svg"
      }
    ],
    "IoT": [
      {
        "slug": "iot_core",
        "displayName": "Iot Core",
        "category": "IoT",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/iot_core.svg"
      },
      {
        "slug": "iot_edge",
        "displayName": "Iot Edge",
        "category": "IoT",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/iot_edge.svg"
      }
    ],
    "Management": [
      {
        "slug": "administration",
        "displayName": "Administration",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/administration.svg"
      },
      {
        "slug": "asset_inventory",
        "displayName": "Asset Inventory",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/asset_inventory.svg"
      },
      {
        "slug": "billing",
        "displayName": "Billing",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/billing.svg"
      },
      {
        "slug": "cloud_asset_inventory",
        "displayName": "Cloud Asset Inventory",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_asset_inventory.svg"
      },
      {
        "slug": "cloud_audit_logs",
        "displayName": "Cloud Audit Logs",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_audit_logs.svg"
      },
      {
        "slug": "cloud_deployment_manager",
        "displayName": "Cloud Deployment Manager",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_deployment_manager.svg"
      },
      {
        "slug": "configuration_management",
        "displayName": "Configuration Management",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/configuration_management.svg"
      },
      {
        "slug": "gce_systems_management",
        "displayName": "Gce Systems Management",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/gce_systems_management.svg"
      },
      {
        "slug": "policy_analyzer",
        "displayName": "Policy Analyzer",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/policy_analyzer.svg"
      },
      {
        "slug": "project",
        "displayName": "Project",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/project.svg"
      },
      {
        "slug": "quotas",
        "displayName": "Quotas",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/quotas.svg"
      },
      {
        "slug": "runtime_config",
        "displayName": "Runtime Config",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/runtime_config.svg"
      },
      {
        "slug": "service_discovery",
        "displayName": "Service Discovery",
        "category": "Management",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/service_discovery.svg"
      }
    ],
    "Marketplace": [
      {
        "slug": "financial_services_marketplace",
        "displayName": "Financial Services Marketplace",
        "category": "Marketplace",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/financial_services_marketplace.svg"
      },
      {
        "slug": "partner_interconnect",
        "displayName": "Partner Interconnect",
        "category": "Marketplace",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/partner_interconnect.svg"
      },
      {
        "slug": "partner_portal",
        "displayName": "Partner Portal",
        "category": "Marketplace",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/partner_portal.svg"
      }
    ],
    "Media": [
      {
        "slug": "cloud_media_edge",
        "displayName": "Cloud Media Edge",
        "category": "Media",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_media_edge.svg"
      },
      {
        "slug": "media_translation_api",
        "displayName": "Media Translation Api",
        "category": "Media",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/media_translation_api.svg"
      }
    ],
    "Migration": [
      {
        "slug": "migrate_for_anthos",
        "displayName": "Migrate For Anthos",
        "category": "Migration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/migrate_for_anthos.svg"
      },
      {
        "slug": "migrate_for_compute_engine",
        "displayName": "Migrate For Compute Engine",
        "category": "Migration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/migrate_for_compute_engine.svg"
      },
      {
        "slug": "transfer_appliance",
        "displayName": "Transfer Appliance",
        "category": "Migration",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/transfer_appliance.svg"
      }
    ],
    "Monitoring": [
      {
        "slug": "cloud_logging",
        "displayName": "Cloud Logging",
        "category": "Monitoring",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_logging.svg"
      },
      {
        "slug": "cloud_monitoring",
        "displayName": "Cloud Monitoring",
        "category": "Monitoring",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_monitoring.svg"
      },
      {
        "slug": "cloud_ops",
        "displayName": "Cloud Ops",
        "category": "Monitoring",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_ops.svg"
      },
      {
        "slug": "error_reporting",
        "displayName": "Error Reporting",
        "category": "Monitoring",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/error_reporting.svg"
      },
      {
        "slug": "performance_dashboard",
        "displayName": "Performance Dashboard",
        "category": "Monitoring",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/performance_dashboard.svg"
      },
      {
        "slug": "stackdriver",
        "displayName": "Stackdriver",
        "category": "Monitoring",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/stackdriver.svg"
      },
      {
        "slug": "trace",
        "displayName": "Trace",
        "category": "Monitoring",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/trace.svg"
      }
    ],
    "Networking": [
      {
        "slug": "cloud_cdn",
        "displayName": "Cloud Cdn",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_cdn.svg"
      },
      {
        "slug": "cloud_dns",
        "displayName": "Cloud Dns",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_dns.svg"
      },
      {
        "slug": "cloud_domains",
        "displayName": "Cloud Domains",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_domains.svg"
      },
      {
        "slug": "cloud_external_ip_addresses",
        "displayName": "Cloud External Ip Addresses",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_external_ip_addresses.svg"
      },
      {
        "slug": "cloud_firewall_rules",
        "displayName": "Cloud Firewall Rules",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_firewall_rules.svg"
      },
      {
        "slug": "cloud_interconnect",
        "displayName": "Cloud Interconnect",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_interconnect.svg"
      },
      {
        "slug": "cloud_load_balancing",
        "displayName": "Cloud Load Balancing",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_load_balancing.svg"
      },
      {
        "slug": "cloud_nat",
        "displayName": "Cloud Nat",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_nat.svg"
      },
      {
        "slug": "cloud_network",
        "displayName": "Cloud Network",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_network.svg"
      },
      {
        "slug": "cloud_router",
        "displayName": "Cloud Router",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_router.svg"
      },
      {
        "slug": "cloud_routes",
        "displayName": "Cloud Routes",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_routes.svg"
      },
      {
        "slug": "cloud_vpn",
        "displayName": "Cloud Vpn",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_vpn.svg"
      },
      {
        "slug": "connectivity_test",
        "displayName": "Connectivity Test",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/connectivity_test.svg"
      },
      {
        "slug": "local_ssd",
        "displayName": "Local Ssd",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/local_ssd.svg"
      },
      {
        "slug": "network_connectivity_center",
        "displayName": "Network Connectivity Center",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/network_connectivity_center.svg"
      },
      {
        "slug": "network_intelligence_center",
        "displayName": "Network Intelligence Center",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/network_intelligence_center.svg"
      },
      {
        "slug": "network_security",
        "displayName": "Network Security",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/network_security.svg"
      },
      {
        "slug": "network_tiers",
        "displayName": "Network Tiers",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/network_tiers.svg"
      },
      {
        "slug": "network_topology",
        "displayName": "Network Topology",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/network_topology.svg"
      },
      {
        "slug": "premium_network_tier",
        "displayName": "Premium Network Tier",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/premium_network_tier.svg"
      },
      {
        "slug": "private_connectivity",
        "displayName": "Private Connectivity",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/private_connectivity.svg"
      },
      {
        "slug": "private_service_connect",
        "displayName": "Private Service Connect",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/private_service_connect.svg"
      },
      {
        "slug": "standard_network_tier",
        "displayName": "Standard Network Tier",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/standard_network_tier.svg"
      },
      {
        "slug": "traffic_director",
        "displayName": "Traffic Director",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/traffic_director.svg"
      },
      {
        "slug": "virtual_private_cloud",
        "displayName": "Virtual Private Cloud",
        "category": "Networking",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/virtual_private_cloud.svg"
      }
    ],
    "Security": [
      {
        "slug": "access_context_manager",
        "displayName": "Access Context Manager",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/access_context_manager.svg"
      },
      {
        "slug": "assured_workloads",
        "displayName": "Assured Workloads",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/assured_workloads.svg"
      },
      {
        "slug": "beyondcorp",
        "displayName": "Beyondcorp",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/beyondcorp.svg"
      },
      {
        "slug": "binary_authorization",
        "displayName": "Binary Authorization",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/binary_authorization.svg"
      },
      {
        "slug": "certificate_authority_service",
        "displayName": "Certificate Authority Service",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/certificate_authority_service.svg"
      },
      {
        "slug": "certificate_manager",
        "displayName": "Certificate Manager",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/certificate_manager.svg"
      },
      {
        "slug": "cloud_armor",
        "displayName": "Cloud Armor",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_armor.svg"
      },
      {
        "slug": "cloud_ekm",
        "displayName": "Cloud Ekm",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_ekm.svg"
      },
      {
        "slug": "cloud_hsm",
        "displayName": "Cloud Hsm",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_hsm.svg"
      },
      {
        "slug": "cloud_ids",
        "displayName": "Cloud Ids",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_ids.svg"
      },
      {
        "slug": "cloud_security_scanner",
        "displayName": "Cloud Security Scanner",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_security_scanner.svg"
      },
      {
        "slug": "key_access_justifications",
        "displayName": "Key Access Justifications",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/key_access_justifications.svg"
      },
      {
        "slug": "key_management_service",
        "displayName": "Key Management Service",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/key_management_service.svg"
      },
      {
        "slug": "phishing_protection",
        "displayName": "Phishing Protection",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/phishing_protection.svg"
      },
      {
        "slug": "risk_manager",
        "displayName": "Risk Manager",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/risk_manager.svg"
      },
      {
        "slug": "secret_manager",
        "displayName": "Secret Manager",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/secret_manager.svg"
      },
      {
        "slug": "security",
        "displayName": "Security",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/security.svg"
      },
      {
        "slug": "security_command_center",
        "displayName": "Security Command Center",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/security_command_center.svg"
      },
      {
        "slug": "security_health_advisor",
        "displayName": "Security Health Advisor",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/security_health_advisor.svg"
      },
      {
        "slug": "security_key_enforcement",
        "displayName": "Security Key Enforcement",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/security_key_enforcement.svg"
      },
      {
        "slug": "web_risk",
        "displayName": "Web Risk",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/web_risk.svg"
      },
      {
        "slug": "web_security_scanner",
        "displayName": "Web Security Scanner",
        "category": "Security",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/web_security_scanner.svg"
      }
    ],
    "Services": [
      {
        "slug": "contact_center_ai",
        "displayName": "Contact Center Ai",
        "category": "Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/contact_center_ai.svg"
      },
      {
        "slug": "support",
        "displayName": "Support",
        "category": "Services",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/support.svg"
      }
    ],
    "Solutions": [
      {
        "slug": "cloud_for_marketing",
        "displayName": "Cloud For Marketing",
        "category": "Solutions",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_for_marketing.svg"
      },
      {
        "slug": "fleet_engine",
        "displayName": "Fleet Engine",
        "category": "Solutions",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/fleet_engine.svg"
      },
      {
        "slug": "retail_api",
        "displayName": "Retail Api",
        "category": "Solutions",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/retail_api.svg"
      }
    ],
    "Storage": [
      {
        "slug": "cloud_storage",
        "displayName": "Cloud Storage",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_storage.svg"
      },
      {
        "slug": "filestore",
        "displayName": "Filestore",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/filestore.svg"
      },
      {
        "slug": "persistent_disk",
        "displayName": "Persistent Disk",
        "category": "Storage",
        "externalUrl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/persistent_disk.svg"
      }
    ]
  },
  "tech-stack": {
    "Languages": [
      {
        "slug": "python",
        "displayName": "Python",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg"
      },
      {
        "slug": "javascript",
        "displayName": "JavaScript",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/javascript.svg"
      },
      {
        "slug": "typescript",
        "displayName": "TypeScript",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/typescript.svg"
      },
      {
        "slug": "go",
        "displayName": "Go",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/go.svg"
      },
      {
        "slug": "rust",
        "displayName": "Rust",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rust.svg"
      },
      {
        "slug": "ruby",
        "displayName": "Ruby",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ruby.svg"
      },
      {
        "slug": "php",
        "displayName": "PHP",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/php.svg"
      },
      {
        "slug": "swift",
        "displayName": "Swift",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/swift.svg"
      },
      {
        "slug": "kotlin",
        "displayName": "Kotlin",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/kotlin.svg"
      },
      {
        "slug": "scala",
        "displayName": "Scala",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/scala.svg"
      },
      {
        "slug": "elixir",
        "displayName": "Elixir",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/elixir.svg"
      },
      {
        "slug": "dart",
        "displayName": "Dart",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/dart.svg"
      },
      {
        "slug": "perl",
        "displayName": "Perl",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/perl.svg"
      },
      {
        "slug": "lua",
        "displayName": "Lua",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/lua.svg"
      },
      {
        "slug": "haskell",
        "displayName": "Haskell",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/haskell.svg"
      },
      {
        "slug": "julia",
        "displayName": "Julia",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/julia.svg"
      },
      {
        "slug": "fortran",
        "displayName": "Fortran",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fortran.svg"
      },
      {
        "slug": "c",
        "displayName": "C",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/c.svg"
      },
      {
        "slug": "cplusplus",
        "displayName": "C++",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cplusplus.svg"
      },
      {
        "slug": "r",
        "displayName": "R",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/r.svg"
      },
      {
        "slug": "clojure",
        "displayName": "Clojure",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/clojure.svg"
      },
      {
        "slug": "erlang",
        "displayName": "Erlang",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/erlang.svg"
      },
      {
        "slug": "fsharp",
        "displayName": "F#",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fsharp.svg"
      },
      {
        "slug": "crystal",
        "displayName": "Crystal",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/crystal.svg"
      },
      {
        "slug": "nim",
        "displayName": "Nim",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nim.svg"
      },
      {
        "slug": "zig",
        "displayName": "Zig",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/zig.svg"
      },
      {
        "slug": "odin",
        "displayName": "Odin",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/odin.svg"
      },
      {
        "slug": "v",
        "displayName": "V",
        "category": "Languages",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/v.svg"
      }
    ],
    "Frontend": [
      {
        "slug": "react",
        "displayName": "React",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg"
      },
      {
        "slug": "vuedotjs",
        "displayName": "Vue.js",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vuedotjs.svg"
      },
      {
        "slug": "angular",
        "displayName": "Angular",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/angular.svg"
      },
      {
        "slug": "svelte",
        "displayName": "Svelte",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/svelte.svg"
      },
      {
        "slug": "nextdotjs",
        "displayName": "Next.js",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nextdotjs.svg"
      },
      {
        "slug": "gatsby",
        "displayName": "Gatsby",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/gatsby.svg"
      },
      {
        "slug": "astro",
        "displayName": "Astro",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/astro.svg"
      },
      {
        "slug": "solid",
        "displayName": "Solid",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/solid.svg"
      },
      {
        "slug": "lit",
        "displayName": "Lit",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/lit.svg"
      },
      {
        "slug": "preact",
        "displayName": "Preact",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/preact.svg"
      },
      {
        "slug": "remix",
        "displayName": "Remix",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/remix.svg"
      },
      {
        "slug": "qwik",
        "displayName": "Qwik",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/qwik.svg"
      },
      {
        "slug": "alpinedotjs",
        "displayName": "Alpine.js",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/alpinedotjs.svg"
      },
      {
        "slug": "storybook",
        "displayName": "Storybook",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/storybook.svg"
      },
      {
        "slug": "tailwindcss",
        "displayName": "Tailwind CSS",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/tailwindcss.svg"
      },
      {
        "slug": "bootstrap",
        "displayName": "Bootstrap",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/bootstrap.svg"
      },
      {
        "slug": "sass",
        "displayName": "Sass",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/sass.svg"
      },
      {
        "slug": "less",
        "displayName": "Less",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/less.svg"
      },
      {
        "slug": "postcss",
        "displayName": "PostCSS",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/postcss.svg"
      },
      {
        "slug": "vite",
        "displayName": "Vite",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vite.svg"
      },
      {
        "slug": "webpack",
        "displayName": "Webpack",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/webpack.svg"
      },
      {
        "slug": "esbuild",
        "displayName": "esbuild",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/esbuild.svg"
      },
      {
        "slug": "html5",
        "displayName": "HTML5",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/html5.svg"
      },
      {
        "slug": "webcomponentsdotorg",
        "displayName": "webcomponents.org",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/webcomponentsdotorg.svg"
      },
      {
        "slug": "threedotjs",
        "displayName": "Three.js",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/threedotjs.svg"
      },
      {
        "slug": "babel",
        "displayName": "Babel",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/babel.svg"
      },
      {
        "slug": "eslint",
        "displayName": "ESLint",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/eslint.svg"
      },
      {
        "slug": "prettier",
        "displayName": "Prettier",
        "category": "Frontend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/prettier.svg"
      }
    ],
    "Backend": [
      {
        "slug": "nodedotjs",
        "displayName": "Node.js",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nodedotjs.svg"
      },
      {
        "slug": "express",
        "displayName": "Express",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/express.svg"
      },
      {
        "slug": "fastapi",
        "displayName": "FastAPI",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fastapi.svg"
      },
      {
        "slug": "flask",
        "displayName": "Flask",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/flask.svg"
      },
      {
        "slug": "django",
        "displayName": "Django",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/django.svg"
      },
      {
        "slug": "springboot",
        "displayName": "Spring Boot",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/springboot.svg"
      },
      {
        "slug": "laravel",
        "displayName": "Laravel",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/laravel.svg"
      },
      {
        "slug": "rubyonrails",
        "displayName": "Ruby on Rails",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rubyonrails.svg"
      },
      {
        "slug": "gin",
        "displayName": "Gin",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/gin.svg"
      },
      {
        "slug": "fastify",
        "displayName": "Fastify",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fastify.svg"
      },
      {
        "slug": "nestjs",
        "displayName": "NestJS",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nestjs.svg"
      },
      {
        "slug": "koa",
        "displayName": "Koa",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/koa.svg"
      },
      {
        "slug": "hono",
        "displayName": "Hono",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/hono.svg"
      },
      {
        "slug": "adonisjs",
        "displayName": "AdonisJS",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/adonisjs.svg"
      },
      {
        "slug": "actix",
        "displayName": "Actix",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/actix.svg"
      },
      {
        "slug": "rocket",
        "displayName": "Rocket",
        "category": "Backend",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rocket.svg"
      }
    ],
    "Cloud": [
      {
        "slug": "googlecloud",
        "displayName": "Google Cloud",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/googlecloud.svg"
      },
      {
        "slug": "digitalocean",
        "displayName": "DigitalOcean",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/digitalocean.svg"
      },
      {
        "slug": "vercel",
        "displayName": "Vercel",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vercel.svg"
      },
      {
        "slug": "netlify",
        "displayName": "Netlify",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/netlify.svg"
      },
      {
        "slug": "cloudflare",
        "displayName": "Cloudflare",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cloudflare.svg"
      },
      {
        "slug": "vultr",
        "displayName": "Vultr",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vultr.svg"
      },
      {
        "slug": "render",
        "displayName": "Render",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/render.svg"
      },
      {
        "slug": "railway",
        "displayName": "Railway",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/railway.svg"
      },
      {
        "slug": "flydotio",
        "displayName": "Fly.io",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/flydotio.svg"
      },
      {
        "slug": "upcloud",
        "displayName": "UpCloud",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/upcloud.svg"
      },
      {
        "slug": "scaleway",
        "displayName": "Scaleway",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/scaleway.svg"
      },
      {
        "slug": "hetzner",
        "displayName": "Hetzner",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/hetzner.svg"
      },
      {
        "slug": "civo",
        "displayName": "Civo",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/civo.svg"
      },
      {
        "slug": "akamai",
        "displayName": "Akamai",
        "category": "Cloud",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/akamai.svg"
      }
    ],
    "Databases": [
      {
        "slug": "postgresql",
        "displayName": "PostgreSQL",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/postgresql.svg"
      },
      {
        "slug": "mysql",
        "displayName": "MySQL",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mysql.svg"
      },
      {
        "slug": "mongodb",
        "displayName": "MongoDB",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg"
      },
      {
        "slug": "redis",
        "displayName": "Redis",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/redis.svg"
      },
      {
        "slug": "elasticsearch",
        "displayName": "Elasticsearch",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/elasticsearch.svg"
      },
      {
        "slug": "mariadb",
        "displayName": "MariaDB",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mariadb.svg"
      },
      {
        "slug": "sqlite",
        "displayName": "SQLite",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/sqlite.svg"
      },
      {
        "slug": "apachecassandra",
        "displayName": "Apache Cassandra",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apachecassandra.svg"
      },
      {
        "slug": "couchbase",
        "displayName": "Couchbase",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/couchbase.svg"
      },
      {
        "slug": "neo4j",
        "displayName": "Neo4j",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/neo4j.svg"
      },
      {
        "slug": "influxdb",
        "displayName": "InfluxDB",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/influxdb.svg"
      },
      {
        "slug": "firebase",
        "displayName": "Firebase",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/firebase.svg"
      },
      {
        "slug": "supabase",
        "displayName": "Supabase",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/supabase.svg"
      },
      {
        "slug": "planetscale",
        "displayName": "PlanetScale",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/planetscale.svg"
      },
      {
        "slug": "cockroachlabs",
        "displayName": "Cockroach Labs",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cockroachlabs.svg"
      },
      {
        "slug": "timescale",
        "displayName": "Timescale",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/timescale.svg"
      },
      {
        "slug": "surrealdb",
        "displayName": "SurrealDB",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/surrealdb.svg"
      },
      {
        "slug": "clickhouse",
        "displayName": "ClickHouse",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/clickhouse.svg"
      },
      {
        "slug": "duckdb",
        "displayName": "DuckDB",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/duckdb.svg"
      },
      {
        "slug": "arangodb",
        "displayName": "ArangoDB",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/arangodb.svg"
      },
      {
        "slug": "dgraph",
        "displayName": "Dgraph",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/dgraph.svg"
      },
      {
        "slug": "fauna",
        "displayName": "Fauna",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fauna.svg"
      },
      {
        "slug": "turso",
        "displayName": "Turso",
        "category": "Databases",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/turso.svg"
      }
    ],
    "DevOps": [
      {
        "slug": "docker",
        "displayName": "Docker",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/docker.svg"
      },
      {
        "slug": "kubernetes",
        "displayName": "Kubernetes",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/kubernetes.svg"
      },
      {
        "slug": "terraform",
        "displayName": "Terraform",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/terraform.svg"
      },
      {
        "slug": "ansible",
        "displayName": "Ansible",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ansible.svg"
      },
      {
        "slug": "jenkins",
        "displayName": "Jenkins",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jenkins.svg"
      },
      {
        "slug": "circleci",
        "displayName": "CircleCI",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/circleci.svg"
      },
      {
        "slug": "githubactions",
        "displayName": "GitHub Actions",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/githubactions.svg"
      },
      {
        "slug": "gitlab",
        "displayName": "GitLab",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/gitlab.svg"
      },
      {
        "slug": "bitbucket",
        "displayName": "Bitbucket",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/bitbucket.svg"
      },
      {
        "slug": "travisci",
        "displayName": "Travis CI",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/travisci.svg"
      },
      {
        "slug": "teamcity",
        "displayName": "TeamCity",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/teamcity.svg"
      },
      {
        "slug": "argo",
        "displayName": "Argo",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/argo.svg"
      },
      {
        "slug": "helm",
        "displayName": "Helm",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/helm.svg"
      },
      {
        "slug": "puppet",
        "displayName": "Puppet",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/puppet.svg"
      },
      {
        "slug": "chef",
        "displayName": "Chef",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/chef.svg"
      },
      {
        "slug": "vagrant",
        "displayName": "Vagrant",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vagrant.svg"
      },
      {
        "slug": "packer",
        "displayName": "Packer",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/packer.svg"
      },
      {
        "slug": "pulumi",
        "displayName": "Pulumi",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pulumi.svg"
      },
      {
        "slug": "rancher",
        "displayName": "Rancher",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rancher.svg"
      },
      {
        "slug": "portainer",
        "displayName": "Portainer",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/portainer.svg"
      },
      {
        "slug": "podman",
        "displayName": "Podman",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/podman.svg"
      },
      {
        "slug": "containerd",
        "displayName": "containerd",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/containerd.svg"
      },
      {
        "slug": "istio",
        "displayName": "Istio",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/istio.svg"
      },
      {
        "slug": "linkerd",
        "displayName": "Linkerd",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/linkerd.svg"
      },
      {
        "slug": "consul",
        "displayName": "Consul",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/consul.svg"
      },
      {
        "slug": "vault",
        "displayName": "Vault",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vault.svg"
      },
      {
        "slug": "nomad",
        "displayName": "Nomad",
        "category": "DevOps",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nomad.svg"
      }
    ],
    "Messaging": [
      {
        "slug": "apachekafka",
        "displayName": "Apache Kafka",
        "category": "Messaging",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apachekafka.svg"
      },
      {
        "slug": "rabbitmq",
        "displayName": "RabbitMQ",
        "category": "Messaging",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rabbitmq.svg"
      },
      {
        "slug": "mqtt",
        "displayName": "MQTT",
        "category": "Messaging",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mqtt.svg"
      },
      {
        "slug": "apachepulsar",
        "displayName": "Apache Pulsar",
        "category": "Messaging",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apachepulsar.svg"
      }
    ],
    "Monitoring": [
      {
        "slug": "prometheus",
        "displayName": "Prometheus",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/prometheus.svg"
      },
      {
        "slug": "grafana",
        "displayName": "Grafana",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/grafana.svg"
      },
      {
        "slug": "datadog",
        "displayName": "Datadog",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/datadog.svg"
      },
      {
        "slug": "newrelic",
        "displayName": "New Relic",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/newrelic.svg"
      },
      {
        "slug": "elastic",
        "displayName": "Elastic",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/elastic.svg"
      },
      {
        "slug": "splunk",
        "displayName": "Splunk",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/splunk.svg"
      },
      {
        "slug": "dynatrace",
        "displayName": "Dynatrace",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/dynatrace.svg"
      },
      {
        "slug": "sentry",
        "displayName": "Sentry",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/sentry.svg"
      },
      {
        "slug": "honeybadger",
        "displayName": "Honeybadger",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/honeybadger.svg"
      },
      {
        "slug": "jaeger",
        "displayName": "Jaeger",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jaeger.svg"
      },
      {
        "slug": "opentelemetry",
        "displayName": "OpenTelemetry",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/opentelemetry.svg"
      },
      {
        "slug": "logstash",
        "displayName": "Logstash",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/logstash.svg"
      },
      {
        "slug": "kibana",
        "displayName": "Kibana",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/kibana.svg"
      },
      {
        "slug": "fluentd",
        "displayName": "Fluentd",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fluentd.svg"
      },
      {
        "slug": "uptimekuma",
        "displayName": "Uptime Kuma",
        "category": "Monitoring",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/uptimekuma.svg"
      }
    ],
    "Web Servers": [
      {
        "slug": "nginx",
        "displayName": "NGINX",
        "category": "Web Servers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nginx.svg"
      },
      {
        "slug": "apache",
        "displayName": "Apache",
        "category": "Web Servers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apache.svg"
      },
      {
        "slug": "caddy",
        "displayName": "Caddy",
        "category": "Web Servers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/caddy.svg"
      },
      {
        "slug": "envoyproxy",
        "displayName": "Envoy Proxy",
        "category": "Web Servers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/envoyproxy.svg"
      }
    ],
    "Tools": [
      {
        "slug": "git",
        "displayName": "Git",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/git.svg"
      },
      {
        "slug": "github",
        "displayName": "GitHub",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg"
      },
      {
        "slug": "jira",
        "displayName": "Jira",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jira.svg"
      },
      {
        "slug": "confluence",
        "displayName": "Confluence",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/confluence.svg"
      },
      {
        "slug": "discord",
        "displayName": "Discord",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/discord.svg"
      },
      {
        "slug": "figma",
        "displayName": "Figma",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/figma.svg"
      },
      {
        "slug": "notion",
        "displayName": "Notion",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/notion.svg"
      },
      {
        "slug": "trello",
        "displayName": "Trello",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/trello.svg"
      },
      {
        "slug": "asana",
        "displayName": "Asana",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/asana.svg"
      },
      {
        "slug": "linear",
        "displayName": "Linear",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/linear.svg"
      },
      {
        "slug": "postman",
        "displayName": "Postman",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/postman.svg"
      },
      {
        "slug": "insomnia",
        "displayName": "Insomnia",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/insomnia.svg"
      },
      {
        "slug": "swagger",
        "displayName": "Swagger",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/swagger.svg"
      },
      {
        "slug": "graphql",
        "displayName": "GraphQL",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/graphql.svg"
      },
      {
        "slug": "curl",
        "displayName": "curl",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/curl.svg"
      },
      {
        "slug": "miro",
        "displayName": "Miro",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/miro.svg"
      },
      {
        "slug": "clickup",
        "displayName": "ClickUp",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/clickup.svg"
      },
      {
        "slug": "todoist",
        "displayName": "Todoist",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/todoist.svg"
      },
      {
        "slug": "airtable",
        "displayName": "Airtable",
        "category": "Tools",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/airtable.svg"
      }
    ],
    "OS": [
      {
        "slug": "linux",
        "displayName": "Linux",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/linux.svg"
      },
      {
        "slug": "ubuntu",
        "displayName": "Ubuntu",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ubuntu.svg"
      },
      {
        "slug": "debian",
        "displayName": "Debian",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/debian.svg"
      },
      {
        "slug": "fedora",
        "displayName": "Fedora",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fedora.svg"
      },
      {
        "slug": "archlinux",
        "displayName": "Arch Linux",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/archlinux.svg"
      },
      {
        "slug": "centos",
        "displayName": "CentOS",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/centos.svg"
      },
      {
        "slug": "alpinelinux",
        "displayName": "Alpine Linux",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/alpinelinux.svg"
      },
      {
        "slug": "apple",
        "displayName": "Apple",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apple.svg"
      },
      {
        "slug": "ios",
        "displayName": "iOS",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ios.svg"
      },
      {
        "slug": "android",
        "displayName": "Android",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/android.svg"
      },
      {
        "slug": "redhat",
        "displayName": "Red Hat",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/redhat.svg"
      },
      {
        "slug": "opensuse",
        "displayName": "openSUSE",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/opensuse.svg"
      },
      {
        "slug": "manjaro",
        "displayName": "Manjaro",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/manjaro.svg"
      },
      {
        "slug": "nixos",
        "displayName": "NixOS",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nixos.svg"
      },
      {
        "slug": "voidlinux",
        "displayName": "Void Linux",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/voidlinux.svg"
      },
      {
        "slug": "gentoo",
        "displayName": "Gentoo",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/gentoo.svg"
      },
      {
        "slug": "freebsd",
        "displayName": "FreeBSD",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/freebsd.svg"
      },
      {
        "slug": "openbsd",
        "displayName": "OpenBSD",
        "category": "OS",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/openbsd.svg"
      }
    ],
    "AI & ML": [
      {
        "slug": "tensorflow",
        "displayName": "TensorFlow",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/tensorflow.svg"
      },
      {
        "slug": "pytorch",
        "displayName": "PyTorch",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pytorch.svg"
      },
      {
        "slug": "huggingface",
        "displayName": "Hugging Face",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/huggingface.svg"
      },
      {
        "slug": "scikitlearn",
        "displayName": "scikit-learn",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/scikitlearn.svg"
      },
      {
        "slug": "keras",
        "displayName": "Keras",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/keras.svg"
      },
      {
        "slug": "mlflow",
        "displayName": "MLflow",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mlflow.svg"
      },
      {
        "slug": "jupyter",
        "displayName": "Jupyter",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jupyter.svg"
      },
      {
        "slug": "pandas",
        "displayName": "pandas",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pandas.svg"
      },
      {
        "slug": "numpy",
        "displayName": "NumPy",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/numpy.svg"
      },
      {
        "slug": "opencv",
        "displayName": "OpenCV",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/opencv.svg"
      },
      {
        "slug": "langchain",
        "displayName": "LangChain",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/langchain.svg"
      },
      {
        "slug": "weightsandbiases",
        "displayName": "Weights & Biases",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/weightsandbiases.svg"
      },
      {
        "slug": "apacheairflow",
        "displayName": "Apache Airflow",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apacheairflow.svg"
      },
      {
        "slug": "apachespark",
        "displayName": "Apache Spark",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apachespark.svg"
      },
      {
        "slug": "databricks",
        "displayName": "Databricks",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/databricks.svg"
      },
      {
        "slug": "googlecolab",
        "displayName": "Google Colab",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/googlecolab.svg"
      },
      {
        "slug": "kaggle",
        "displayName": "Kaggle",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/kaggle.svg"
      },
      {
        "slug": "anaconda",
        "displayName": "Anaconda",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/anaconda.svg"
      },
      {
        "slug": "scipy",
        "displayName": "SciPy",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/scipy.svg"
      },
      {
        "slug": "plotly",
        "displayName": "Plotly",
        "category": "AI & ML",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/plotly.svg"
      }
    ],
    "Security": [
      {
        "slug": "letsencrypt",
        "displayName": "Let's Encrypt",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/letsencrypt.svg"
      },
      {
        "slug": "auth0",
        "displayName": "Auth0",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/auth0.svg"
      },
      {
        "slug": "okta",
        "displayName": "Okta",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/okta.svg"
      },
      {
        "slug": "snyk",
        "displayName": "Snyk",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/snyk.svg"
      },
      {
        "slug": "dependabot",
        "displayName": "Dependabot",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/dependabot.svg"
      },
      {
        "slug": "owasp",
        "displayName": "OWASP",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/owasp.svg"
      },
      {
        "slug": "wireshark",
        "displayName": "Wireshark",
        "category": "Security",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/wireshark.svg"
      }
    ],
    "Testing": [
      {
        "slug": "jest",
        "displayName": "Jest",
        "category": "Testing",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jest.svg"
      },
      {
        "slug": "mocha",
        "displayName": "Mocha",
        "category": "Testing",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mocha.svg"
      },
      {
        "slug": "jasmine",
        "displayName": "Jasmine",
        "category": "Testing",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jasmine.svg"
      },
      {
        "slug": "cypress",
        "displayName": "Cypress",
        "category": "Testing",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cypress.svg"
      },
      {
        "slug": "selenium",
        "displayName": "Selenium",
        "category": "Testing",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/selenium.svg"
      },
      {
        "slug": "puppeteer",
        "displayName": "Puppeteer",
        "category": "Testing",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/puppeteer.svg"
      },
      {
        "slug": "pytest",
        "displayName": "Pytest",
        "category": "Testing",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pytest.svg"
      },
      {
        "slug": "vitest",
        "displayName": "Vitest",
        "category": "Testing",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vitest.svg"
      },
      {
        "slug": "testinglibrary",
        "displayName": "Testing Library",
        "category": "Testing",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/testinglibrary.svg"
      },
      {
        "slug": "cucumber",
        "displayName": "Cucumber",
        "category": "Testing",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cucumber.svg"
      }
    ],
    "Editors": [
      {
        "slug": "vim",
        "displayName": "Vim",
        "category": "Editors",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vim.svg"
      },
      {
        "slug": "neovim",
        "displayName": "Neovim",
        "category": "Editors",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/neovim.svg"
      },
      {
        "slug": "jetbrains",
        "displayName": "JetBrains",
        "category": "Editors",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jetbrains.svg"
      },
      {
        "slug": "intellijidea",
        "displayName": "IntelliJ IDEA",
        "category": "Editors",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/intellijidea.svg"
      },
      {
        "slug": "pycharm",
        "displayName": "PyCharm",
        "category": "Editors",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pycharm.svg"
      },
      {
        "slug": "webstorm",
        "displayName": "WebStorm",
        "category": "Editors",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/webstorm.svg"
      },
      {
        "slug": "goland",
        "displayName": "GoLand",
        "category": "Editors",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/goland.svg"
      },
      {
        "slug": "rider",
        "displayName": "Rider",
        "category": "Editors",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rider.svg"
      },
      {
        "slug": "sublimetext",
        "displayName": "Sublime Text",
        "category": "Editors",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/sublimetext.svg"
      },
      {
        "slug": "eclipseide",
        "displayName": "Eclipse IDE",
        "category": "Editors",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/eclipseide.svg"
      },
      {
        "slug": "xcode",
        "displayName": "Xcode",
        "category": "Editors",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/xcode.svg"
      }
    ],
    "Package Managers": [
      {
        "slug": "npm",
        "displayName": "npm",
        "category": "Package Managers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/npm.svg"
      },
      {
        "slug": "yarn",
        "displayName": "Yarn",
        "category": "Package Managers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/yarn.svg"
      },
      {
        "slug": "pnpm",
        "displayName": "pnpm",
        "category": "Package Managers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pnpm.svg"
      },
      {
        "slug": "bun",
        "displayName": "Bun",
        "category": "Package Managers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/bun.svg"
      },
      {
        "slug": "deno",
        "displayName": "Deno",
        "category": "Package Managers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/deno.svg"
      },
      {
        "slug": "homebrew",
        "displayName": "Homebrew",
        "category": "Package Managers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/homebrew.svg"
      },
      {
        "slug": "chocolatey",
        "displayName": "Chocolatey",
        "category": "Package Managers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/chocolatey.svg"
      },
      {
        "slug": "snapcraft",
        "displayName": "Snapcraft",
        "category": "Package Managers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/snapcraft.svg"
      },
      {
        "slug": "flatpak",
        "displayName": "Flatpak",
        "category": "Package Managers",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/flatpak.svg"
      }
    ],
    "Services": [
      {
        "slug": "stripe",
        "displayName": "Stripe",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/stripe.svg"
      },
      {
        "slug": "paypal",
        "displayName": "PayPal",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/paypal.svg"
      },
      {
        "slug": "square",
        "displayName": "Square",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/square.svg"
      },
      {
        "slug": "shopify",
        "displayName": "Shopify",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/shopify.svg"
      },
      {
        "slug": "mailchimp",
        "displayName": "MailChimp",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mailchimp.svg"
      },
      {
        "slug": "mapbox",
        "displayName": "Mapbox",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mapbox.svg"
      },
      {
        "slug": "algolia",
        "displayName": "Algolia",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/algolia.svg"
      },
      {
        "slug": "meilisearch",
        "displayName": "Meilisearch",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/meilisearch.svg"
      },
      {
        "slug": "contentful",
        "displayName": "Contentful",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/contentful.svg"
      },
      {
        "slug": "strapi",
        "displayName": "Strapi",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/strapi.svg"
      },
      {
        "slug": "sanity",
        "displayName": "Sanity",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/sanity.svg"
      },
      {
        "slug": "ghost",
        "displayName": "Ghost",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ghost.svg"
      },
      {
        "slug": "wordpress",
        "displayName": "WordPress",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/wordpress.svg"
      },
      {
        "slug": "anthropic",
        "displayName": "Anthropic",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/anthropic.svg"
      },
      {
        "slug": "ollama",
        "displayName": "Ollama",
        "category": "Services",
        "externalUrl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ollama.svg"
      }
    ]
  }
};

/**
 * Direct URL mapping for quick icon lookup
 */
export const iconUrlMap: Record<string, string> = {
  "aws:marketplace_dark": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_General-Icons/64/Arch_AWS-Marketplace_Dark_64.svg",
  "aws:marketplace_light": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_General-Icons/64/Arch_AWS-Marketplace_Light_64.svg",
  "aws:res_alert": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Alert_48_Light.svg",
  "aws:res_authenticated_user": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Authenticated-User_48_Light.svg",
  "aws:res_camera": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Camera_48_Light.svg",
  "aws:res_chat": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Chat_48_Light.svg",
  "aws:res_client": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Client_48_Light.svg",
  "aws:res_cold_storage": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Cold-Storage_48_Light.svg",
  "aws:res_credentials": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Credentials_48_Light.svg",
  "aws:res_data_stream": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Data-Stream_48_Light.svg",
  "aws:res_data_table": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Data-Table_48_Light.svg",
  "aws:res_database": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Database_48_Light.svg",
  "aws:res_disk": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Disk_48_Light.svg",
  "aws:res_document": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Document_48_Light.svg",
  "aws:res_documents": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Documents_48_Light.svg",
  "aws:res_email": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Email_48_Light.svg",
  "aws:res_firewall": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Firewall_48_Light.svg",
  "aws:res_folder": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Folder_48_Light.svg",
  "aws:res_folders": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Folders_48_Light.svg",
  "aws:res_forums": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Forums_48_Light.svg",
  "aws:res_gear": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Gear_48_Light.svg",
  "aws:res_generic_application": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Generic-Application_48_Light.svg",
  "aws:res_git_repository": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Git-Repository_48_Light.svg",
  "aws:res_globe": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Globe_48_Light.svg",
  "aws:res_internet": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Internet_48_Light.svg",
  "aws:res_internet_alt1": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Internet-alt1_48_Light.svg",
  "aws:res_internet_alt2": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Internet-alt2_48_Light.svg",
  "aws:res_json_script": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_JSON-Script_48_Light.svg",
  "aws:res_logs": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Logs_48_Light.svg",
  "aws:res_magnifying_glass": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Magnifying-Glass_48_Light.svg",
  "aws:res_management_console": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_AWS-Management-Console_48_Light.svg",
  "aws:res_metrics": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Metrics_48_Light.svg",
  "aws:res_mobile_client": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Mobile-client_48_Light.svg",
  "aws:res_multimedia": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Multimedia_48_Light.svg",
  "aws:res_office_building": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Office-building_48_Light.svg",
  "aws:res_programming_language": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Programming-Language_48_Light.svg",
  "aws:res_question": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Question_48_Light.svg",
  "aws:res_recover": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Recover_48_Light.svg",
  "aws:res_saml_token": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_SAML-token_48_Light.svg",
  "aws:res_sdk": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_SDK_48_Light.svg",
  "aws:res_server": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Server_48_Light.svg",
  "aws:res_servers": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Servers_48_Light.svg",
  "aws:res_shield": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Shield_48_Light.svg",
  "aws:res_source_code": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Source-Code_48_Light.svg",
  "aws:res_ssl_padlock": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_SSL-padlock_48_Light.svg",
  "aws:res_tape_storage": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Tape-storage_48_Light.svg",
  "aws:res_toolkit": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Toolkit_48_Light.svg",
  "aws:res_user": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_User_48_Light.svg",
  "aws:res_users": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_General-Icons/Res_48_Light/Res_Users_48_Light.svg",
  "aws:res_amplify_aws_amplify_studio": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Front-End-Web-Mobile/Res_AWS-Amplify_AWS-Amplify-Studio_48.svg",
  "aws:res_location_service_geofence": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Front-End-Web-Mobile/Res_Amazon-Location-Service_Geofence_48.svg",
  "aws:res_location_service_map_": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Front-End-Web-Mobile/Res_Amazon-Location-Service_Map _48.svg",
  "aws:res_location_service_place": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Front-End-Web-Mobile/Res_Amazon-Location-Service_Place_48.svg",
  "aws:res_location_service_routes": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Front-End-Web-Mobile/Res_Amazon-Location-Service_Routes_48.svg",
  "aws:res_location_service_track_": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Front-End-Web-Mobile/Res_Amazon-Location-Service_Track _48.svg",
  "aws:location_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Front-End-Web-Mobile/64/Arch_Amazon-Location-Service_64.svg",
  "aws:amplify": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Front-End-Web-Mobile/64/Arch_AWS-Amplify_64.svg",
  "aws:device_farm": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Front-End-Web-Mobile/64/Arch_AWS-Device-Farm_64.svg",
  "aws:api_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-API-Gateway_64.svg",
  "aws:appflow": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-AppFlow_64.svg",
  "aws:eventbridge": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-EventBridge_64.svg",
  "aws:managed_workflows_for_apache_airflow": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-Managed-Workflows-for-Apache-Airflow_64.svg",
  "aws:mq": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-MQ_64.svg",
  "aws:simple_notification_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-Simple-Notification-Service_64.svg",
  "aws:simple_queue_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_Amazon-Simple-Queue-Service_64.svg",
  "aws:appsync": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_AWS-AppSync_64.svg",
  "aws:b2b_data_interchange": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_AWS-B2B-Data-Interchange_64.svg",
  "aws:console_mobile_application": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_AWS-Console-Mobile-Application_64.svg",
  "aws:express_workflows": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_AWS-Express-Workflows_64.svg",
  "aws:step_functions": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_App-Integration/64/Arch_AWS-Step-Functions_64.svg",
  "aws:res_app_mesh_mesh": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-App-Mesh_Mesh_48.svg",
  "aws:res_app_mesh_virtual_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-App-Mesh_Virtual-Gateway_48.svg",
  "aws:res_app_mesh_virtual_node": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-App-Mesh_Virtual-Node_48.svg",
  "aws:res_app_mesh_virtual_router": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-App-Mesh_Virtual-Router_48.svg",
  "aws:res_app_mesh_virtual_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-App-Mesh_Virtual-Service_48.svg",
  "aws:res_cloud_map_namespace": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Cloud-Map_Namespace_48.svg",
  "aws:res_cloud_map_resource": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Cloud-Map_Resource_48.svg",
  "aws:res_cloud_map_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Cloud-Map_Service_48.svg",
  "aws:res_cloud_wan_core_network_edge": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Cloud-WAN_Core-Network-Edge_48.svg",
  "aws:res_cloud_wan_segment_network": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Cloud-WAN_Segment-Network_48.svg",
  "aws:res_cloud_wan_transit_gateway_route_table_attachment": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Cloud-WAN_Transit-Gateway-Route-Table-Attachment_48.svg",
  "aws:res_cloudfront_download_distribution": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-CloudFront_Download-Distribution_48.svg",
  "aws:res_cloudfront_edge_location": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-CloudFront_Edge-Location_48.svg",
  "aws:res_cloudfront_functions": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-CloudFront_Functions_48.svg",
  "aws:res_cloudfront_streaming_distribution": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-CloudFront_Streaming-Distribution_48.svg",
  "aws:res_direct_connect_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Direct-Connect_Gateway_48.svg",
  "aws:res_elastic_load_balancing_application_load_balancer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Elastic-Load-Balancing_Application-Load-Balancer_48.svg",
  "aws:res_elastic_load_balancing_classic_load_balancer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Elastic-Load-Balancing_Classic-Load-Balancer_48.svg",
  "aws:res_elastic_load_balancing_gateway_load_balancer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Elastic-Load-Balancing_Gateway-Load-Balancer_48.svg",
  "aws:res_elastic_load_balancing_network_load_balancer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Elastic-Load-Balancing_Network-Load-Balancer_48.svg",
  "aws:res_route_53_hosted_zone": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53-Hosted-Zone_48.svg",
  "aws:res_route_53_readiness_checks": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Readiness-Checks_48.svg",
  "aws:res_route_53_resolver": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Resolver_48.svg",
  "aws:res_route_53_resolver_dns_firewall": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Resolver-DNS-Firewall_48.svg",
  "aws:res_route_53_resolver_query_logging": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Resolver-Query-Logging_48.svg",
  "aws:res_route_53_route_53_application_recovery_controller": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Route-53-Application-Recovery-Controller_48.svg",
  "aws:res_route_53_route_table": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Route-Table_48.svg",
  "aws:res_route_53_routing_controls": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-Route-53_Routing-Controls_48.svg",
  "aws:res_transit_gateway_attachment": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_AWS-Transit-Gateway_Attachment_48.svg",
  "aws:res_vpc_carrier_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Carrier-Gateway_48.svg",
  "aws:res_vpc_customer_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Customer-Gateway_48.svg",
  "aws:res_vpc_elastic_network_adapter": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Elastic-Network-Adapter_48.svg",
  "aws:res_vpc_elastic_network_interface": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Elastic-Network-Interface_48.svg",
  "aws:res_vpc_endpoints": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Endpoints_48.svg",
  "aws:res_vpc_flow_logs": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Flow-Logs_48.svg",
  "aws:res_vpc_internet_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Internet-Gateway_48.svg",
  "aws:res_vpc_nat_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_NAT-Gateway_48.svg",
  "aws:res_vpc_network_access_analyzer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Network-Access-Analyzer_48.svg",
  "aws:res_vpc_network_access_control_list": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Network-Access-Control-List_48.svg",
  "aws:res_vpc_peering_connection": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Peering-Connection_48.svg",
  "aws:res_vpc_reachability_analyzer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Reachability-Analyzer_48.svg",
  "aws:res_vpc_router": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Router_48.svg",
  "aws:res_vpc_traffic_mirroring": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Traffic-Mirroring_48.svg",
  "aws:res_vpc_virtual_private_cloud_vpc": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_Virtual-private-cloud-VPC_48.svg",
  "aws:res_vpc_vpn_connection": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_VPN-Connection_48.svg",
  "aws:res_vpc_vpn_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Networking-Content-Delivery/Res_Amazon-VPC_VPN-Gateway_48.svg",
  "aws:cloudfront": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_Amazon-CloudFront_64.svg",
  "aws:route_53": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_Amazon-Route-53_64.svg",
  "aws:virtual_private_cloud": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_Amazon-Virtual-Private-Cloud_64.svg",
  "aws:vpc_lattice": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_Amazon-VPC-Lattice_64.svg",
  "aws:app_mesh": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-App-Mesh_64.svg",
  "aws:client_vpn": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Client-VPN_64.svg",
  "aws:cloud_map": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Cloud-Map_64.svg",
  "aws:cloud_wan": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Cloud-WAN_64.svg",
  "aws:direct_connect": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Direct-Connect_64.svg",
  "aws:global_accelerator": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Global-Accelerator_64.svg",
  "aws:private_5g": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Private-5G_64.svg",
  "aws:privatelink": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-PrivateLink_64.svg",
  "aws:site_to_site_vpn": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Site-to-Site-VPN_64.svg",
  "aws:transit_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Transit-Gateway_64.svg",
  "aws:verified_access": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_AWS-Verified-Access_64.svg",
  "aws:elastic_load_balancing": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Networking-Content-Delivery/64/Arch_Elastic-Load-Balancing_64.svg",
  "aws:res_application_discovery_service_aws_agentless_collector": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Application-Discovery-Service_AWS-Agentless-Collector_48.svg",
  "aws:res_application_discovery_service_aws_discovery_agent": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Application-Discovery-Service_AWS-Discovery-Agent_48.svg",
  "aws:res_application_discovery_service_migration_evaluator_collector": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Application-Discovery-Service_Migration-Evaluator-Collector_48.svg",
  "aws:res_datasync_agent": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Datasync_Agent_48.svg",
  "aws:res_datasync_discovery": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-DataSync_Discovery_48.svg",
  "aws:res_mainframe_modernization_analyzer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Mainframe-Modernization_Analyzer_48.svg",
  "aws:res_mainframe_modernization_compiler": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Mainframe-Modernization_Compiler_48.svg",
  "aws:res_mainframe_modernization_converter": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Mainframe-Modernization_Converter_48.svg",
  "aws:res_mainframe_modernization_developer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Mainframe-Modernization_Developer_48.svg",
  "aws:res_mainframe_modernization_runtime": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Mainframe-Modernization_Runtime_48.svg",
  "aws:res_migration_hub_refactor_spaces_applications": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Migration-Hub_Refactor-Spaces-Applications_48.svg",
  "aws:res_migration_hub_refactor_spaces_environments": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Migration-Hub_Refactor-Spaces-Environments_48.svg",
  "aws:res_migration_hub_refactor_spaces_services": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Migration-Hub_Refactor-Spaces-Services_48.svg",
  "aws:res_transfer_family_aws_as2": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Transfer-Family_AWS-AS2_48.svg",
  "aws:res_transfer_family_aws_ftp": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Transfer-Family_AWS-FTP_48.svg",
  "aws:res_transfer_family_aws_ftps": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Transfer-Family_AWS-FTPS_48.svg",
  "aws:res_transfer_family_aws_sftp": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Migration-Transfer/Res_AWS-Transfer-Family_AWS-SFTP_48.svg",
  "aws:application_discovery_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-Application-Discovery-Service_64.svg",
  "aws:application_migration_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-Application-Migration-Service_64.svg",
  "aws:datasync": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-DataSync_64.svg",
  "aws:mainframe_modernization": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-Mainframe-Modernization_64.svg",
  "aws:migration_evaluator": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-Migration-Evaluator_64.svg",
  "aws:migration_hub": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-Migration-Hub_64.svg",
  "aws:transfer_family": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Migration-Transfer/64/Arch_AWS-Transfer-Family_64.svg",
  "aws:res_athena_data_source_connectors": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Athena_Data-Source-Connectors_48.svg",
  "aws:res_cloudsearch_search_documents": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-CloudSearch_Search-Documents_48.svg",
  "aws:res_data_exchange_for_apis": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_AWS-Data-Exchange-for-APIs_48.svg",
  "aws:res_datazone_business_data_catalog": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-DataZone_Business-Data-Catalog_48.svg",
  "aws:res_datazone_data_portal": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-DataZone_Data-Portal_48.svg",
  "aws:res_datazone_data_projects": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-DataZone_Data-Projects_48.svg",
  "aws:res_emr_cluster": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-EMR_Cluster_48.svg",
  "aws:res_emr_emr_engine": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-EMR_EMR-Engine_48.svg",
  "aws:res_emr_hdfs_cluster": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-EMR_HDFS-Cluster_48.svg",
  "aws:res_glue_aws_glue_for_ray": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_AWS-Glue_AWS-Glue-for-Ray_48.svg",
  "aws:res_glue_crawler": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_AWS-Glue_Crawler_48.svg",
  "aws:res_glue_data_catalog": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_AWS-Glue_Data-Catalog_48.svg",
  "aws:res_glue_data_quality": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_AWS-Glue_Data-Quality_48.svg",
  "aws:res_lake_formation_data_lake": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_AWS-Lake-Formation_Data-Lake_48.svg",
  "aws:res_msk_amazon_msk_connect": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-MSK_Amazon-MSK-Connect_48.svg",
  "aws:res_opensearch_service_cluster_administrator_node": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_Cluster-Administrator-Node_48.svg",
  "aws:res_opensearch_service_data_node": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_Data-Node_48.svg",
  "aws:res_opensearch_service_index": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_Index_48.svg",
  "aws:res_opensearch_service_observability": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_Observability_48.svg",
  "aws:res_opensearch_service_opensearch_dashboards": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_OpenSearch-Dashboards_48.svg",
  "aws:res_opensearch_service_opensearch_ingestion": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_OpenSearch-Ingestion_48.svg",
  "aws:res_opensearch_service_traces": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_Traces_48.svg",
  "aws:res_opensearch_service_ultrawarm_node": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-OpenSearch-Service_UltraWarm-Node_48.svg",
  "aws:res_quicksight_paginated_reports": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Quicksight_Paginated-Reports_48.svg",
  "aws:res_redshift_auto_copy": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_Auto-copy_48.svg",
  "aws:res_redshift_data_sharing_governance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_Data-Sharing-Governance_48.svg",
  "aws:res_redshift_dense_compute_node": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_Dense-Compute-Node_48.svg",
  "aws:res_redshift_dense_storage_node": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_Dense-Storage-Node_48.svg",
  "aws:res_redshift_ml": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_ML_48.svg",
  "aws:res_redshift_query_editor_v2.0": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_Query-Editor-v2.0_48.svg",
  "aws:res_redshift_ra3": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_RA3_48.svg",
  "aws:res_redshift_streaming_ingestion": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Analytics/Res_Amazon-Redshift_Streaming-Ingestion_48.svg",
  "aws:athena": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Athena_64.svg",
  "aws:cloudsearch": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-CloudSearch_64.svg",
  "aws:datazone": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-DataZone_64.svg",
  "aws:emr": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-EMR_64.svg",
  "aws:finspace": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-FinSpace_64.svg",
  "aws:kinesis": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Kinesis_64.svg",
  "aws:kinesis_data_firehose": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Kinesis-Data-Firehose_64.svg",
  "aws:kinesis_data_streams": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Kinesis-Data-Streams_64.svg",
  "aws:kinesis_video_streams": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Kinesis-Video-Streams_64.svg",
  "aws:managed_service_for_apache_flink": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Managed-Service-for-Apache-Flink_64.svg",
  "aws:managed_streaming_for_apache_kafka": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Managed-Streaming-for-Apache-Kafka_64.svg",
  "aws:opensearch_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-OpenSearch-Service_64.svg",
  "aws:quicksight": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-QuickSight_64.svg",
  "aws:redshift": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_Amazon-Redshift_64.svg",
  "aws:clean_rooms": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Clean-Rooms_64.svg",
  "aws:data_exchange": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Data-Exchange_64.svg",
  "aws:data_pipeline": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Data-Pipeline_64.svg",
  "aws:entity_resolution": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Entity-Resolution_64.svg",
  "aws:glue": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Glue_64.svg",
  "aws:glue_databrew": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Glue-DataBrew_64.svg",
  "aws:glue_elastic_views": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Glue-Elastic-Views_64.svg",
  "aws:lake_formation": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Analytics/64/Arch_AWS-Lake-Formation_64.svg",
  "aws:res_aurora_amazon_aurora_instance_alternate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora_Amazon-Aurora-Instance-alternate_48.svg",
  "aws:res_aurora_amazon_rds_instance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora_Amazon-RDS-Instance_48.svg",
  "aws:res_aurora_amazon_rds_instance_aternate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora_Amazon-RDS-Instance-Aternate_48.svg",
  "aws:res_aurora_instance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-Instance_48.svg",
  "aws:res_aurora_mariadb_instance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-MariaDB-Instance_48.svg",
  "aws:res_aurora_mariadb_instance_alternate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-MariaDB-Instance-Alternate_48.svg",
  "aws:res_aurora_mysql_instance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-MySQL-Instance_48.svg",
  "aws:res_aurora_mysql_instance_alternate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-MySQL-Instance-Alternate_48.svg",
  "aws:res_aurora_oracle_instance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-Oracle-Instance_48.svg",
  "aws:res_aurora_oracle_instance_alternate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-Oracle-Instance-Alternate_48.svg",
  "aws:res_aurora_piops_instance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-PIOPS-Instance_48.svg",
  "aws:res_aurora_postgresql_instance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-PostgreSQL-Instance_48.svg",
  "aws:res_aurora_postgresql_instance_alternate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-PostgreSQL-Instance-Alternate_48.svg",
  "aws:res_aurora_sql_server_instance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-SQL-Server-Instance_48.svg",
  "aws:res_aurora_sql_server_instance_alternate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora-SQL-Server-Instance-Alternate_48.svg",
  "aws:res_aurora_trusted_language_extensions_for_postgresql": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-Aurora_Trusted-Language-Extensions-for-PostgreSQL_48.svg",
  "aws:res_database_migration_service_database_migration_workflow_or_job": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_AWS-Database-Migration-Service_Database-migration-workflow-or-job_48.svg",
  "aws:res_documentdb_elastic_clusters": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DocumentDB_Elastic-Clusters_48.svg",
  "aws:res_dynamodb_amazon_dynamodb_accelerator": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Amazon-DynamoDB-Accelerator_48.svg",
  "aws:res_dynamodb_attribute": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Attribute_48.svg",
  "aws:res_dynamodb_attributes": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Attributes_48.svg",
  "aws:res_dynamodb_global_secondary_index": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Global-secondary-index_48.svg",
  "aws:res_dynamodb_item": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Item_48.svg",
  "aws:res_dynamodb_items": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Items_48.svg",
  "aws:res_dynamodb_standard_access_table_class": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Standard-Access-Table-Class_48.svg",
  "aws:res_dynamodb_standard_infrequent_access_table_class": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Standard-Infrequent-Access-Table-Class_48.svg",
  "aws:res_dynamodb_stream": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Stream_48.svg",
  "aws:res_dynamodb_table": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-DynamoDB_Table_48.svg",
  "aws:res_elasticache_cache_node": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-ElastiCache_Cache-Node_48.svg",
  "aws:res_elasticache_elasticache_for_memcached": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-ElastiCache_ElastiCache-for-Memcached_48.svg",
  "aws:res_elasticache_elasticache_for_redis": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-ElastiCache_ElastiCache-for-Redis_48.svg",
  "aws:res_rds_blue_green_deployments": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS_Blue-Green-Deployments_48.svg",
  "aws:res_rds_multi_az": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS_Multi-AZ_48.svg",
  "aws:res_rds_multi_az_db_cluster": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS_Multi-AZ-DB-Cluster_48.svg",
  "aws:res_rds_optimized_writes": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS_Optimized-Writes_48.svg",
  "aws:res_rds_proxy_instance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS-Proxy-Instance_48.svg",
  "aws:res_rds_proxy_instance_alternate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS-Proxy-Instance-Alternate_48.svg",
  "aws:res_rds_trusted_language_extensions_for_postgresql": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Database/Res_Amazon-RDS_Trusted-Language-Extensions-for-PostgreSQL_48.svg",
  "aws:aurora": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-Aurora_64.svg",
  "aws:documentdb": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-DocumentDB_64.svg",
  "aws:dynamodb": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-DynamoDB_64.svg",
  "aws:elasticache": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-ElastiCache_64.svg",
  "aws:keyspaces": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-Keyspaces_64.svg",
  "aws:memorydb_for_redis": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-MemoryDB-for-Redis_64.svg",
  "aws:neptune": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-Neptune_64.svg",
  "aws:rds": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-RDS_64.svg",
  "aws:rds_on_vmware": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-RDS-on-VMware_64.svg",
  "aws:timestream": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_Amazon-Timestream_64.svg",
  "aws:database_migration_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Database/64/Arch_AWS-Database-Migration-Service_64.svg",
  "aws:res_backup_audit_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Audit-Manager_48.svg",
  "aws:res_backup_aws_backup_for_aws_cloudformation": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_AWS-Backup-for-AWS-CloudFormation_48.svg",
  "aws:res_backup_aws_backup_support_for_amazon_fsx_for_netapp_ontap": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_AWS-Backup-support-for-Amazon-FSx-for-NetApp-ONTAP_48.svg",
  "aws:res_backup_aws_backup_support_for_amazon_s3": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_AWS-Backup-support-for-Amazon-S3_48.svg",
  "aws:res_backup_aws_backup_support_for_vmware_workloads": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_AWS-Backup-Support-for-VMware-Workloads_48.svg",
  "aws:res_backup_backup_plan": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Backup-Plan_48.svg",
  "aws:res_backup_backup_restore": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Backup-Restore_48.svg",
  "aws:res_backup_backup_vault": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Backup-Vault_48.svg",
  "aws:res_backup_compliance_reporting": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Compliance-Reporting_48.svg",
  "aws:res_backup_compute": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Compute_48.svg",
  "aws:res_backup_database": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Database_48.svg",
  "aws:res_backup_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Gateway_48.svg",
  "aws:res_backup_legal_hold": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Legal-Hold_48.svg",
  "aws:res_backup_recovery_point_objective": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Recovery-Point-Objective_48.svg",
  "aws:res_backup_recovery_time_objective": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Recovery-Time-Objective_48.svg",
  "aws:res_backup_storage": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Storage_48.svg",
  "aws:res_backup_vault_lock": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Vault-Lock_48.svg",
  "aws:res_backup_virtual_machine": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Virtual-Machine_48.svg",
  "aws:res_backup_virtual_machine_monitor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Backup_Virtual-Machine-Monitor_48.svg",
  "aws:res_elastic_block_store_amazon_data_lifecycle_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-Block-Store_Amazon-Data-Lifecycle-Manager_48.svg",
  "aws:res_elastic_block_store_multiple_volumes": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-Block-Store_Multiple-Volumes_48.svg",
  "aws:res_elastic_block_store_snapshot": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-Block-Store_Snapshot_48.svg",
  "aws:res_elastic_block_store_volume": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-Block-Store_Volume_48.svg",
  "aws:res_elastic_block_store_volume_gp3": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-Block-Store_Volume-gp3_48.svg",
  "aws:res_elastic_file_system_efs_intelligent_tiering": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_EFS-Intelligent-Tiering_48.svg",
  "aws:res_elastic_file_system_efs_one_zone": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_EFS-One-Zone_48.svg",
  "aws:res_elastic_file_system_efs_one_zone_infrequent_access": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_EFS-One-Zone-Infrequent-Access_48.svg",
  "aws:res_elastic_file_system_efs_standard": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_EFS-Standard_48.svg",
  "aws:res_elastic_file_system_efs_standard_infrequent_access": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_EFS-Standard-Infrequent-Access_48.svg",
  "aws:res_elastic_file_system_elastic_throughput": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_Elastic-Throughput_48.svg",
  "aws:res_elastic_file_system_file_system": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Elastic-File-System_File-System_48.svg",
  "aws:res_file_cache_hybrid_nfs_linked_datasets": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-File-Cache_Hybrid-NFS-linked-datasets_48.svg",
  "aws:res_file_cache_on_premises_nfs_linked_datasets": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-File-Cache_On-premises-NFS-linked-datasets_48.svg",
  "aws:res_file_cache_s3_linked_datasets": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-File-Cache_S3-linked-datasets_48.svg",
  "aws:res_simple_storage_service_bucket": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_Bucket_48.svg",
  "aws:res_simple_storage_service_bucket_with_objects": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_Bucket-With-Objects_48.svg",
  "aws:res_simple_storage_service_general_access_points": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_General-Access-Points_48.svg",
  "aws:res_simple_storage_service_glacier_archive": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service-Glacier_Archive_48.svg",
  "aws:res_simple_storage_service_glacier_vault": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service-Glacier_Vault_48.svg",
  "aws:res_simple_storage_service_object": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_Object_48.svg",
  "aws:res_simple_storage_service_s3_batch_operations": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Batch-Operations_48.svg",
  "aws:res_simple_storage_service_s3_glacier_deep_archive": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Glacier-Deep-Archive_48.svg",
  "aws:res_simple_storage_service_s3_glacier_flexible_retrieval": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Glacier-Flexible-Retrieval_48.svg",
  "aws:res_simple_storage_service_s3_glacier_instant_retrieval": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Glacier-Instant-Retrieval_48.svg",
  "aws:res_simple_storage_service_s3_intelligent_tiering": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Intelligent-Tiering_48.svg",
  "aws:res_simple_storage_service_s3_multi_region_access_points": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Multi-Region-Access-Points_48.svg",
  "aws:res_simple_storage_service_s3_object_lambda": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Object-Lambda_48.svg",
  "aws:res_simple_storage_service_s3_object_lambda_access_points": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Object-Lambda-Access-Points_48.svg",
  "aws:res_simple_storage_service_s3_object_lock": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Object-Lock_48.svg",
  "aws:res_simple_storage_service_s3_on_outposts": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-On-Outposts_48.svg",
  "aws:res_simple_storage_service_s3_one_zone_ia": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-One-Zone-IA_48.svg",
  "aws:res_simple_storage_service_s3_replication": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Replication_48.svg",
  "aws:res_simple_storage_service_s3_replication_time_control": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Replication-Time-Control_48.svg",
  "aws:res_simple_storage_service_s3_select": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Select_48.svg",
  "aws:res_simple_storage_service_s3_standard": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Standard_48.svg",
  "aws:res_simple_storage_service_s3_standard_ia": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Standard-IA_48.svg",
  "aws:res_simple_storage_service_s3_storage_lens": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_S3-Storage-Lens_48.svg",
  "aws:res_simple_storage_service_vpc_access_points": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_Amazon-Simple-Storage-Service_VPC-Access-Points_48.svg",
  "aws:res_snowball_snowball_import_export": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Snowball_Snowball-Import-Export_48.svg",
  "aws:res_storage_gateway_amazon_fsx_file_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Amazon-FSx-File-Gateway_48.svg",
  "aws:res_storage_gateway_amazon_s3_file_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Amazon-S3-File-Gateway_48.svg",
  "aws:res_storage_gateway_cached_volume": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Cached-Volume_48.svg",
  "aws:res_storage_gateway_file_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_File-Gateway_48.svg",
  "aws:res_storage_gateway_noncached_volume": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Noncached-Volume_48.svg",
  "aws:res_storage_gateway_tape_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Tape-Gateway_48.svg",
  "aws:res_storage_gateway_virtual_tape_library": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Virtual-Tape-Library_48.svg",
  "aws:res_storage_gateway_volume_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Storage/Res_AWS-Storage-Gateway_Volume-Gateway_48.svg",
  "aws:efs": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-EFS_64.svg",
  "aws:elastic_block_store": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-Elastic-Block-Store_64.svg",
  "aws:file_cache": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-File-Cache_64.svg",
  "aws:fsx": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-FSx_64.svg",
  "aws:fsx_for_lustre": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-FSx-for-Lustre_64.svg",
  "aws:fsx_for_netapp_ontap": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-FSx-for-NetApp-ONTAP_64.svg",
  "aws:fsx_for_openzfs": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-FSx-for-OpenZFS_64.svg",
  "aws:fsx_for_wfs": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-FSx-for-WFS_64.svg",
  "aws:s3_on_outposts": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-S3-on-Outposts_64.svg",
  "aws:simple_storage_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-Simple-Storage-Service_64.svg",
  "aws:simple_storage_service_glacier": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_Amazon-Simple-Storage-Service-Glacier_64.svg",
  "aws:backup": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Backup_64.svg",
  "aws:elastic_disaster_recovery": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Elastic-Disaster-Recovery_64.svg",
  "aws:snowball": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Snowball_64.svg",
  "aws:snowball_edge": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Snowball-Edge_64.svg",
  "aws:snowcone": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Snowcone_64.svg",
  "aws:snowmobile": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Snowmobile_64.svg",
  "aws:storage_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Storage/64/Arch_AWS-Storage-Gateway_64.svg",
  "aws:res_braket_chandelier": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Chandelier_48.svg",
  "aws:res_braket_chip": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Chip_48.svg",
  "aws:res_braket_embedded_simulator": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Embedded-Simulator_48.svg",
  "aws:res_braket_managed_simulator": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Managed-Simulator_48.svg",
  "aws:res_braket_noise_simulator": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Noise-Simulator_48.svg",
  "aws:res_braket_qpu": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_QPU_48.svg",
  "aws:res_braket_simulator": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Simulator_48.svg",
  "aws:res_braket_simulator_1": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Simulator-1_48.svg",
  "aws:res_braket_simulator_2": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Simulator-2_48.svg",
  "aws:res_braket_simulator_3": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Simulator-3_48.svg",
  "aws:res_braket_simulator_4": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Simulator-4_48.svg",
  "aws:res_braket_state_vector": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_State-Vector_48.svg",
  "aws:res_braket_tensor_network": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Quantum-Technologies/Res_Amazon-Braket_Tensor-Network_48.svg",
  "aws:braket": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Quantum-Technologies/64/Arch_Amazon-Braket_64.svg",
  "aws:res_certificate_manager_certificate_authority": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Certificate-Manager_Certificate-Authority_48.svg",
  "aws:res_directory_service_ad_connector": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Directory-Service_AD-Connector_48.svg",
  "aws:res_directory_service_aws_managed_microsoft_ad": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Directory-Service_AWS-Managed-Microsoft-AD_48.svg",
  "aws:res_directory_service_simple_ad": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Directory-Service_Simple-AD_48.svg",
  "aws:res_identity_access_management_add_on": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Add-on_48.svg",
  "aws:res_identity_access_management_aws_sts": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_AWS-STS_48.svg",
  "aws:res_identity_access_management_aws_sts_alternate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_AWS-STS-Alternate_48.svg",
  "aws:res_identity_access_management_data_encryption_key": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Data-Encryption-Key_48.svg",
  "aws:res_identity_access_management_encrypted_data": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Encrypted-Data_48.svg",
  "aws:res_identity_access_management_iam_access_analyzer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_IAM-Access-Analyzer_48.svg",
  "aws:res_identity_access_management_iam_roles_anywhere": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_IAM-Roles-Anywhere_48.svg",
  "aws:res_identity_access_management_long_term_security_credential": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Long-Term-Security-Credential_48.svg",
  "aws:res_identity_access_management_mfa_token": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_MFA-Token_48.svg",
  "aws:res_identity_access_management_permissions": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Permissions_48.svg",
  "aws:res_identity_access_management_role": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Role_48.svg",
  "aws:res_identity_access_management_temporary_security_credential": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Identity-Access-Management_Temporary-Security-Credential_48.svg",
  "aws:res_inspector_agent": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_Amazon-Inspector_Agent_48.svg",
  "aws:res_key_management_service_external_key_store": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Key-Management-Service_External-Key-Store_48.svg",
  "aws:res_network_firewall_endpoints": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Network-Firewall_Endpoints_48.svg",
  "aws:res_security_hub_finding": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Security-Hub_Finding_48.svg",
  "aws:res_shield_aws_shield_advanced": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-Shield_AWS-Shield-Advanced_48.svg",
  "aws:res_waf_bad_bot": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Bad-Bot_48.svg",
  "aws:res_waf_bot": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Bot_48.svg",
  "aws:res_waf_bot_control": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Bot-Control_48.svg",
  "aws:res_waf_filtering_rule": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Filtering-Rule_48.svg",
  "aws:res_waf_labels": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Labels_48.svg",
  "aws:res_waf_managed_rule": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Managed-Rule_48.svg",
  "aws:res_waf_rule": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Security-Identity-Compliance/Res_AWS-WAF_Rule_48.svg",
  "aws:cloud_directory": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Cloud-Directory_64.svg",
  "aws:cognito": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Cognito_64.svg",
  "aws:detective": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Detective_64.svg",
  "aws:guardduty": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-GuardDuty_64.svg",
  "aws:inspector": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Inspector_64.svg",
  "aws:macie": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Macie_64.svg",
  "aws:security_lake": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Security-Lake_64.svg",
  "aws:verified_permissions": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_Amazon-Verified-Permissions_64.svg",
  "aws:artifact": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Artifact_64.svg",
  "aws:audit_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Audit-Manager_64.svg",
  "aws:certificate_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Certificate-Manager_64.svg",
  "aws:cloudhsm": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-CloudHSM_64.svg",
  "aws:directory_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Directory-Service_64.svg",
  "aws:firewall_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Firewall-Manager_64.svg",
  "aws:iam_identity_center": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-IAM-Identity-Center_64.svg",
  "aws:identity_and_access_management": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Identity-and-Access-Management_64.svg",
  "aws:key_management_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Key-Management-Service_64.svg",
  "aws:network_firewall": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Network-Firewall_64.svg",
  "aws:payment_cryptography": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Payment-Cryptography_64.svg",
  "aws:private_certificate_authority": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Private-Certificate-Authority_64.svg",
  "aws:resource_access_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Resource-Access-Manager_64.svg",
  "aws:secrets_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Secrets-Manager_64.svg",
  "aws:security_hub": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Security-Hub_64.svg",
  "aws:shield": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Shield_64.svg",
  "aws:signer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-Signer_64.svg",
  "aws:waf": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Security-Identity-Compliance/64/Arch_AWS-WAF_64.svg",
  "aws:res_cloud_digital_interface": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Media-Services/Res_AWS-Cloud-Digital-Interface_48.svg",
  "aws:res_elemental_mediaconnect_mediaconnect_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Media-Services/Res_AWS-Elemental-MediaConnect_MediaConnect-Gateway_48.svg",
  "aws:elastic_transcoder": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_Amazon-Elastic-Transcoder_64.svg",
  "aws:interactive_video_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_Amazon-Interactive-Video-Service_64.svg",
  "aws:nimble_studio": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_Amazon-Nimble-Studio_64.svg",
  "aws:elemental_appliances_&_software": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-Appliances-&-Software_64.svg",
  "aws:elemental_conductor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-Conductor_64.svg",
  "aws:elemental_delta": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-Delta_64.svg",
  "aws:elemental_link": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-Link_64.svg",
  "aws:elemental_live": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-Live_64.svg",
  "aws:elemental_mediaconnect": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-MediaConnect_64.svg",
  "aws:elemental_mediaconvert": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-MediaConvert_64.svg",
  "aws:elemental_medialive": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-MediaLive_64.svg",
  "aws:elemental_mediapackage": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-MediaPackage_64.svg",
  "aws:elemental_mediastore": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-MediaStore_64.svg",
  "aws:elemental_mediatailor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-MediaTailor_64.svg",
  "aws:elemental_server": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Media-Services/64/Arch_AWS-Elemental-Server_64.svg",
  "aws:res_cloud9_cloud9": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Developer-Tools/Res_AWS-Cloud9_Cloud9_48.svg",
  "aws:codecatalyst": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_Amazon-CodeCatalyst_64.svg",
  "aws:corretto": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_Amazon-Corretto_64.svg",
  "aws:application_composer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-Application-Composer_64.svg",
  "aws:cloud_control_api": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-Cloud-Control-API_64.svg",
  "aws:cloud_development_kit": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-Cloud-Development-Kit_64.svg",
  "aws:cloud9": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-Cloud9_64.svg",
  "aws:cloudshell": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CloudShell_64.svg",
  "aws:codeartifact": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CodeArtifact_64.svg",
  "aws:codebuild": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CodeBuild_64.svg",
  "aws:codecommit": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CodeCommit_64.svg",
  "aws:codedeploy": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CodeDeploy_64.svg",
  "aws:codepipeline": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CodePipeline_64.svg",
  "aws:codestar": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-CodeStar_64.svg",
  "aws:command_line_interface": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-Command-Line-Interface_64.svg",
  "aws:tools_and_sdks": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-Tools-and-SDKs_64.svg",
  "aws:x_ray": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Developer-Tools/64/Arch_AWS-X-Ray_64.svg",
  "aws:res_cloudformation_change_set": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-CloudFormation_Change-Set_48.svg",
  "aws:res_cloudformation_stack": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-CloudFormation_Stack_48.svg",
  "aws:res_cloudformation_template": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-CloudFormation_Template_48.svg",
  "aws:res_cloudtrail_cloudtrail_lake": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-CloudTrail_CloudTrail-Lake_48.svg",
  "aws:res_cloudwatch_alarm": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Alarm_48.svg",
  "aws:res_cloudwatch_cross_account_observability": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Cross-account-Observability_48.svg",
  "aws:res_cloudwatch_data_protection": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Data-Protection_48.svg",
  "aws:res_cloudwatch_event_event_based": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Event-Event-Based_48.svg",
  "aws:res_cloudwatch_event_time_based": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Event-Time-Based_48.svg",
  "aws:res_cloudwatch_evidently": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Evidently_48.svg",
  "aws:res_cloudwatch_logs": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Logs_48.svg",
  "aws:res_cloudwatch_metrics_insights": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Metrics-Insights_48.svg",
  "aws:res_cloudwatch_rule": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Rule_48.svg",
  "aws:res_cloudwatch_rum": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_RUM_48.svg",
  "aws:res_cloudwatch_synthetics": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_Amazon-CloudWatch_Synthetics_48.svg",
  "aws:res_license_manager_application_discovery": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-License-Manager_Application-Discovery_48.svg",
  "aws:res_license_manager_license_blending": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-License-Manager_License-Blending_48.svg",
  "aws:res_opsworks_apps": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Apps_48.svg",
  "aws:res_opsworks_deployments": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Deployments_48.svg",
  "aws:res_opsworks_instances": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Instances_48.svg",
  "aws:res_opsworks_layers": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Layers_48.svg",
  "aws:res_opsworks_monitoring": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Monitoring_48.svg",
  "aws:res_opsworks_permissions": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Permissions_48.svg",
  "aws:res_opsworks_resources": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Resources_48.svg",
  "aws:res_opsworks_stack2": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-OpsWorks_Stack2_48.svg",
  "aws:res_organizations_account": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Organizations_Account_48.svg",
  "aws:res_organizations_management_account": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Organizations_Management-Account_48.svg",
  "aws:res_organizations_organizational_unit": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Organizations_Organizational-Unit_48.svg",
  "aws:res_systems_manager_application_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Application-Manager_48.svg",
  "aws:res_systems_manager_automation": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Automation_48.svg",
  "aws:res_systems_manager_change_calendar": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Change-Calendar_48.svg",
  "aws:res_systems_manager_change_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Change-Manager_48.svg",
  "aws:res_systems_manager_compliance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Compliance_48.svg",
  "aws:res_systems_manager_distributor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Distributor_48.svg",
  "aws:res_systems_manager_documents": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Documents_48.svg",
  "aws:res_systems_manager_incident_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Incident-Manager_48.svg",
  "aws:res_systems_manager_inventory": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Inventory_48.svg",
  "aws:res_systems_manager_maintenance_windows": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Maintenance-Windows_48.svg",
  "aws:res_systems_manager_opscenter": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_OpsCenter_48.svg",
  "aws:res_systems_manager_parameter_store": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Parameter-Store_48.svg",
  "aws:res_systems_manager_patch_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Patch-Manager_48.svg",
  "aws:res_systems_manager_run_command": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Run-Command_48.svg",
  "aws:res_systems_manager_session_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_Session-Manager_48.svg",
  "aws:res_systems_manager_state_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Systems-Manager_State-Manager_48.svg",
  "aws:res_trusted_advisor_checklist": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Trusted-Advisor_Checklist_48.svg",
  "aws:res_trusted_advisor_checklist_cost": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Trusted-Advisor_Checklist-Cost_48.svg",
  "aws:res_trusted_advisor_checklist_fault_tolerant": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Trusted-Advisor_Checklist-Fault-Tolerant_48.svg",
  "aws:res_trusted_advisor_checklist_performance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Trusted-Advisor_Checklist-Performance_48.svg",
  "aws:res_trusted_advisor_checklist_security": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Management-Governance/Res_AWS-Trusted-Advisor_Checklist-Security_48.svg",
  "aws:cloudwatch": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_Amazon-CloudWatch_64.svg",
  "aws:managed_grafana": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_Amazon-Managed-Grafana_64.svg",
  "aws:managed_service_for_prometheus": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_Amazon-Managed-Service-for-Prometheus_64.svg",
  "aws:appconfig": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-AppConfig_64.svg",
  "aws:application_auto_scaling": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Application-Auto-Scaling_64.svg",
  "aws:auto_scaling": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Auto-Scaling_64.svg",
  "aws:backint_agent": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Backint-Agent_64.svg",
  "aws:chatbot": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Chatbot_64.svg",
  "aws:cloudformation": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-CloudFormation_64.svg",
  "aws:cloudtrail": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-CloudTrail_64.svg",
  "aws:config": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Config_64.svg",
  "aws:control_tower": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Control-Tower_64.svg",
  "aws:distro_for_opentelemetry": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Distro-for-OpenTelemetry_64.svg",
  "aws:fault_injection_simulator": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Fault-Injection-Simulator_64.svg",
  "aws:health_dashboard": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Health-Dashboard_64.svg",
  "aws:launch_wizard": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Launch-Wizard_64.svg",
  "aws:license_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-License-Manager_64.svg",
  "aws:management_console": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Management-Console_64.svg",
  "aws:opsworks": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-OpsWorks_64.svg",
  "aws:organizations": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Organizations_64.svg",
  "aws:proton": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Proton_64.svg",
  "aws:resilience_hub": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Resilience-Hub_64.svg",
  "aws:resource_explorer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Resource-Explorer_64.svg",
  "aws:service_catalog": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Service-Catalog_64.svg",
  "aws:service_management_connector": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Service-Management-Connector_64.svg",
  "aws:systems_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Systems-Manager_64.svg",
  "aws:telco_network_builder": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Telco-Network-Builder_64.svg",
  "aws:trusted_advisor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Trusted-Advisor_64.svg",
  "aws:well_architected_tool": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Management-Governance/64/Arch_AWS-Well-Architected-Tool_64.svg",
  "aws:res_devops_guru_insights": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-DevOps-Guru_Insights_48.svg",
  "aws:res_rekognition_image": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-Rekognition_Image_48.svg",
  "aws:res_rekognition_video": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-Rekognition_Video_48.svg",
  "aws:res_sagemaker_canvas": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-SageMaker_Canvas_48.svg",
  "aws:res_sagemaker_geospatial_ml": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-SageMaker_Geospatial-ML_48.svg",
  "aws:res_sagemaker_model": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-SageMaker_Model_48.svg",
  "aws:res_sagemaker_notebook": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-SageMaker_Notebook_48.svg",
  "aws:res_sagemaker_shadow_testing": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-SageMaker_Shadow-Testing_48.svg",
  "aws:res_sagemaker_train": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-SageMaker_Train_48.svg",
  "aws:res_textract_analyze_lending": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Machine-Learning/Res_Amazon-Textract_Analyze-Lending_48.svg",
  "aws:augmented_ai_a2i": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Augmented-AI-A2I_64.svg",
  "aws:bedrock": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Bedrock_64.svg",
  "aws:codeguru": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-CodeGuru_64.svg",
  "aws:codewhisperer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-CodeWhisperer_64.svg",
  "aws:comprehend": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Comprehend_64.svg",
  "aws:comprehend_medical": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Comprehend-Medical_64.svg",
  "aws:devops_guru": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-DevOps-Guru_64.svg",
  "aws:elastic_inference": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Elastic-Inference_64.svg",
  "aws:forecast": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Forecast_64.svg",
  "aws:fraud_detector": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Fraud-Detector_64.svg",
  "aws:kendra": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Kendra_64.svg",
  "aws:lex": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Lex_64.svg",
  "aws:lookout_for_equipment": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Lookout-for-Equipment_64.svg",
  "aws:lookout_for_metrics": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Lookout-for-Metrics_64.svg",
  "aws:lookout_for_vision": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Lookout-for-Vision_64.svg",
  "aws:monitron": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Monitron_64.svg",
  "aws:personalize": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Personalize_64.svg",
  "aws:polly": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Polly_64.svg",
  "aws:q": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Q_64.svg",
  "aws:rekognition": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Rekognition_64.svg",
  "aws:sagemaker": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-SageMaker_64.svg",
  "aws:sagemaker_ground_truth": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-SageMaker-Ground-Truth_64.svg",
  "aws:sagemaker_studio_lab": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-SageMaker-Studio-Lab_64.svg",
  "aws:textract": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Textract_64.svg",
  "aws:transcribe": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Transcribe_64.svg",
  "aws:translate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Amazon-Translate_64.svg",
  "aws:apache_mxnet_on_aws": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_Apache-MXNet-on-AWS_64.svg",
  "aws:deep_learning_amis": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-Deep-Learning-AMIs_64.svg",
  "aws:deep_learning_containers": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-Deep-Learning-Containers_64.svg",
  "aws:deepcomposer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-DeepComposer_64.svg",
  "aws:deeplens": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-DeepLens_64.svg",
  "aws:deepracer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-DeepRacer_64.svg",
  "aws:healthimaging": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-HealthImaging_64.svg",
  "aws:healthlake": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-HealthLake_64.svg",
  "aws:healthomics": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-HealthOmics_64.svg",
  "aws:healthscribe": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-HealthScribe_64.svg",
  "aws:neuron": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-Neuron_64.svg",
  "aws:panorama": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_AWS-Panorama_64.svg",
  "aws:tensorflow_on_aws": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_TensorFlow-on-AWS_64.svg",
  "aws:torchserve": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Machine-Learning/64/Arch_TorchServe_64.svg",
  "aws:res_ec2_ami": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_AMI_48.svg",
  "aws:res_ec2_auto_scaling": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Auto-Scaling_48.svg",
  "aws:res_ec2_aws_microservice_extractor_for_.net": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_AWS-Microservice-Extractor-for-.NET_48.svg",
  "aws:res_ec2_db_instance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_DB-Instance_48.svg",
  "aws:res_ec2_elastic_ip_address": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Elastic-IP-Address_48.svg",
  "aws:res_ec2_instance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Instance_48.svg",
  "aws:res_ec2_instance_with_cloudwatch": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Instance-with-CloudWatch_48.svg",
  "aws:res_ec2_instances": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Instances_48.svg",
  "aws:res_ec2_rescue": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Rescue_48.svg",
  "aws:res_ec2_spot_instance": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_Amazon-EC2_Spot-Instance_48.svg",
  "aws:res_elastic_beanstalk_application": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_AWS-Elastic-Beanstalk_Application_48.svg",
  "aws:res_elastic_beanstalk_deployment": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_AWS-Elastic-Beanstalk_Deployment_48.svg",
  "aws:res_lambda_lambda_function": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Compute/Res_AWS-Lambda_Lambda-Function_48.svg",
  "aws:ec2": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-EC2_64.svg",
  "aws:ec2_auto_scaling": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-EC2-Auto-Scaling_64.svg",
  "aws:ec2_image_builder": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-EC2-Image-Builder_64.svg",
  "aws:genomics_cli": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-Genomics-CLI_64.svg",
  "aws:lightsail": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-Lightsail_64.svg",
  "aws:lightsail_for_research": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Amazon-Lightsail-for-Research_64.svg",
  "aws:app_runner": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-App-Runner_64.svg",
  "aws:batch": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Batch_64.svg",
  "aws:compute_optimizer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Compute-Optimizer_64.svg",
  "aws:elastic_beanstalk": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Elastic-Beanstalk_64.svg",
  "aws:lambda": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Lambda_64.svg",
  "aws:local_zones": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Local-Zones_64.svg",
  "aws:nitro_enclaves": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Nitro-Enclaves_64.svg",
  "aws:outposts_family": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Outposts-family_64.svg",
  "aws:outposts_rack": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Outposts-rack_64.svg",
  "aws:outposts_servers": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Outposts-servers_64.svg",
  "aws:parallel_cluster": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Parallel-Cluster_64.svg",
  "aws:serverless_application_repository": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Serverless-Application-Repository_64.svg",
  "aws:simspace_weaver": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-SimSpace-Weaver_64.svg",
  "aws:thinkbox_deadline": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Thinkbox-Deadline_64.svg",
  "aws:thinkbox_frost": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Thinkbox-Frost_64.svg",
  "aws:thinkbox_krakatoa": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Thinkbox-Krakatoa_64.svg",
  "aws:thinkbox_sequoia": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Thinkbox-Sequoia_64.svg",
  "aws:thinkbox_stoke": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Thinkbox-Stoke_64.svg",
  "aws:thinkbox_xmesh": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Thinkbox-XMesh_64.svg",
  "aws:wavelength": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Wavelength_64.svg",
  "aws:bottlerocket": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Bottlerocket_64.svg",
  "aws:elastic_fabric_adapter": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_Elastic-Fabric-Adapter_64.svg",
  "aws:nice_dcv": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_NICE-DCV_64.svg",
  "aws:nice_enginframe": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_NICE-EnginFrame_64.svg",
  "aws:vmware_cloud_on_aws": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Compute/64/Arch_VMware-Cloud-on-AWS_64.svg",
  "aws:res_elastic_container_registry_image": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Registry_Image_48.svg",
  "aws:res_elastic_container_registry_registry": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Registry_Registry_48.svg",
  "aws:res_elastic_container_service_container_1": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_Container-1_48.svg",
  "aws:res_elastic_container_service_container_2": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_Container-2_48.svg",
  "aws:res_elastic_container_service_container_3": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_Container-3_48.svg",
  "aws:res_elastic_container_service_copiiot_cli": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_CopiIoT-CLI_48.svg",
  "aws:res_elastic_container_service_ecs_service_connect": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_ECS-Service-Connect_48.svg",
  "aws:res_elastic_container_service_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_Service_48.svg",
  "aws:res_elastic_container_service_task": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Container-Service_Task_48.svg",
  "aws:res_elastic_kubernetes_service_eks_on_outposts": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Containers/Res_Amazon-Elastic-Kubernetes-Service_EKS-on-Outposts_48.svg",
  "aws:ecs_anywhere": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-ECS-Anywhere_64.svg",
  "aws:eks_anywhere": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-EKS-Anywhere_64.svg",
  "aws:eks_cloud": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-EKS-Cloud_64.svg",
  "aws:eks_distro": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-EKS-Distro_64.svg",
  "aws:elastic_container_registry": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-Elastic-Container-Registry_64.svg",
  "aws:elastic_container_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-Elastic-Container-Service_64.svg",
  "aws:elastic_kubernetes_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Amazon-Elastic-Kubernetes-Service_64.svg",
  "aws:fargate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_AWS-Fargate_64.svg",
  "aws:red_hat_openshift_service_on_aws": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Containers/64/Arch_Red-Hat-OpenShift-Service-on-AWS_64.svg",
  "aws:res_iot_action": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Action_48.svg",
  "aws:res_iot_actuator": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Actuator_48.svg",
  "aws:res_iot_alexa_enabled_device": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Alexa_Enabled-Device_48.svg",
  "aws:res_iot_alexa_skill": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Alexa_Skill_48.svg",
  "aws:res_iot_alexa_voice_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Alexa_Voice-Service_48.svg",
  "aws:res_iot_analytics_channel": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Analytics_Channel_48.svg",
  "aws:res_iot_analytics_data_store": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Analytics_Data-Store_48.svg",
  "aws:res_iot_analytics_dataset": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Analytics_Dataset_48.svg",
  "aws:res_iot_analytics_notebook": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Analytics_Notebook_48.svg",
  "aws:res_iot_analytics_pipeline": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Analytics_Pipeline_48.svg",
  "aws:res_iot_certificate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Certificate_48.svg",
  "aws:res_iot_core_device_advisor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Core_Device-Advisor_48.svg",
  "aws:res_iot_core_device_location": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Core_Device-Location_48.svg",
  "aws:res_iot_desired_state": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Desired-State_48.svg",
  "aws:res_iot_device_defender_iot_device_jobs": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Device-Defender_IoT-Device-Jobs_48.svg",
  "aws:res_iot_device_gateway": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Device-Gateway_48.svg",
  "aws:res_iot_device_management_fleet_hub": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Device-Management_Fleet-Hub_48.svg",
  "aws:res_iot_device_tester": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Device-Tester_48.svg",
  "aws:res_iot_echo": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Echo_48.svg",
  "aws:res_iot_fire_tv": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Fire_TV_48.svg",
  "aws:res_iot_fire_tv_stick": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Fire-TV_Stick_48.svg",
  "aws:res_iot_greengrass_artifact": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Artifact_48.svg",
  "aws:res_iot_greengrass_component": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Component_48.svg",
  "aws:res_iot_greengrass_component_machine_learning": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Component-Machine-Learning_48.svg",
  "aws:res_iot_greengrass_component_nucleus": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Component-Nucleus_48.svg",
  "aws:res_iot_greengrass_component_private": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Component-Private_48.svg",
  "aws:res_iot_greengrass_component_public": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Component-Public_48.svg",
  "aws:res_iot_greengrass_connector": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Connector_48.svg",
  "aws:res_iot_greengrass_interprocess_communication": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Interprocess-Communication_48.svg",
  "aws:res_iot_greengrass_protocol": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Protocol_48.svg",
  "aws:res_iot_greengrass_recipe": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Recipe_48.svg",
  "aws:res_iot_greengrass_stream_manager": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Greengrass_Stream-Manager_48.svg",
  "aws:res_iot_hardware_board": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Hardware-Board_48.svg",
  "aws:res_iot_http_protocol": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_HTTP_Protocol_48.svg",
  "aws:res_iot_http2_protocol": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_HTTP2-Protocol_48.svg",
  "aws:res_iot_lambda_function": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Lambda_Function_48.svg",
  "aws:res_iot_lorawan_protocol": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_LoRaWAN-Protocol_48.svg",
  "aws:res_iot_mqtt_protocol": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_MQTT_Protocol_48.svg",
  "aws:res_iot_over_air_update": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Over-Air-Update_48.svg",
  "aws:res_iot_policy": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Policy_48.svg",
  "aws:res_iot_reported_state": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Reported-State_48.svg",
  "aws:res_iot_rule": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-Rule_48.svg",
  "aws:res_iot_sailboat": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Sailboat_48.svg",
  "aws:res_iot_sensor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Sensor_48.svg",
  "aws:res_iot_servo": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Servo_48.svg",
  "aws:res_iot_shadow": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Shadow_48.svg",
  "aws:res_iot_simulator": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Simulator_48.svg",
  "aws:res_iot_sitewise_asset": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-SiteWise_Asset_48.svg",
  "aws:res_iot_sitewise_asset_hierarchy": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-SiteWise_Asset-Hierarchy_48.svg",
  "aws:res_iot_sitewise_asset_model": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-SiteWise_Asset-Model_48.svg",
  "aws:res_iot_sitewise_asset_properties": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-SiteWise_Asset-Properties_48.svg",
  "aws:res_iot_sitewise_data_streams": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT-SiteWise_Data-Streams_48.svg",
  "aws:res_iot_thing_bank": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Bank_48.svg",
  "aws:res_iot_thing_bicycle": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Bicycle_48.svg",
  "aws:res_iot_thing_camera": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Camera_48.svg",
  "aws:res_iot_thing_car": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Car_48.svg",
  "aws:res_iot_thing_cart": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Cart_48.svg",
  "aws:res_iot_thing_coffee_pot": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Coffee-Pot_48.svg",
  "aws:res_iot_thing_door_lock": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Door-Lock_48.svg",
  "aws:res_iot_thing_factory": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Factory_48.svg",
  "aws:res_iot_thing_freertos_device": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_FreeRTOS-Device_48.svg",
  "aws:res_iot_thing_generic": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Generic_48.svg",
  "aws:res_iot_thing_house": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_House_48.svg",
  "aws:res_iot_thing_humidity_sensor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Humidity-Sensor_48.svg",
  "aws:res_iot_thing_industrial_pc": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Industrial-PC_48.svg",
  "aws:res_iot_thing_lightbulb": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Lightbulb_48.svg",
  "aws:res_iot_thing_medical_emergency": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Medical-Emergency_48.svg",
  "aws:res_iot_thing_plc": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_PLC_48.svg",
  "aws:res_iot_thing_police_emergency": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Police-Emergency_48.svg",
  "aws:res_iot_thing_relay": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Relay_48.svg",
  "aws:res_iot_thing_stacklight": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Stacklight_48.svg",
  "aws:res_iot_thing_temperature_humidity_sensor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Temperature-Humidity-Sensor_48.svg",
  "aws:res_iot_thing_temperature_sensor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Temperature-Sensor_48.svg",
  "aws:res_iot_thing_temperature_vibration_sensor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Temperature-Vibration-Sensor_48.svg",
  "aws:res_iot_thing_thermostat": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Thermostat_48.svg",
  "aws:res_iot_thing_travel": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Travel_48.svg",
  "aws:res_iot_thing_utility": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Utility_48.svg",
  "aws:res_iot_thing_vibration_sensor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Vibration-Sensor_48.svg",
  "aws:res_iot_thing_windfarm": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Thing_Windfarm_48.svg",
  "aws:res_iot_topic": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_IoT/Res_AWS-IoT_Topic_48.svg",
  "aws:iot_1_click": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-1-Click_64.svg",
  "aws:iot_analytics": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Analytics_64.svg",
  "aws:iot_button": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Button_64.svg",
  "aws:iot_core": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Core_64.svg",
  "aws:iot_device_defender": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Device-Defender_64.svg",
  "aws:iot_device_management": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Device-Management_64.svg",
  "aws:iot_events": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Events_64.svg",
  "aws:iot_expresslink": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-ExpressLink_64.svg",
  "aws:iot_fleetwise": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-FleetWise_64.svg",
  "aws:iot_greengrass": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Greengrass_64.svg",
  "aws:iot_roborunner": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-RoboRunner_64.svg",
  "aws:iot_sitewise": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-SiteWise_64.svg",
  "aws:iot_things_graph": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-Things-Graph_64.svg",
  "aws:iot_twinmaker": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_AWS-IoT-TwinMaker_64.svg",
  "aws:freertos": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Internet-of-Things/64/Arch_FreeRTOS_64.svg",
  "aws:res_managed_blockchain_blockchain": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Blockchain/Res_Amazon-Managed-Blockchain_Blockchain_48.svg",
  "aws:managed_blockchain": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Blockchain/64/Arch_Amazon-Managed-Blockchain_64.svg",
  "aws:quantum_ledger_database": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Blockchain/64/Arch_Amazon-Quantum-Ledger-Database_64.svg",
  "aws:res_pinpoint_journey": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Business-Applications/Res_Amazon-Pinpoint_Journey_48.svg",
  "aws:res_simple_email_service_email": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Business-Applications/Res_Amazon-Simple-Email-Service_Email_48.svg",
  "aws:alexa_for_business": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Alexa-For-Business_64.svg",
  "aws:chime": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Chime_64.svg",
  "aws:chime_sdk": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Chime-SDK_64.svg",
  "aws:connect": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Connect_64.svg",
  "aws:honeycode": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Honeycode_64.svg",
  "aws:pinpoint": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Pinpoint_64.svg",
  "aws:pinpoint_apis": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Pinpoint-APIs_64.svg",
  "aws:simple_email_service": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-Simple-Email-Service_64.svg",
  "aws:workdocs": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-WorkDocs_64.svg",
  "aws:workdocs_sdk": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-WorkDocs-SDK_64.svg",
  "aws:workmail": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_Amazon-WorkMail_64.svg",
  "aws:appfabric": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_AWS-AppFabric_64.svg",
  "aws:supply_chain": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_AWS-Supply-Chain_64.svg",
  "aws:wickr": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Business-Applications/64/Arch_AWS-Wickr_64.svg",
  "aws:res_robomaker_cloud_extensions_ros": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Robotics/Res_AWS-RoboMaker_Cloud-Extensions-ROS_48.svg",
  "aws:res_robomaker_development_environment": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Robotics/Res_AWS-RoboMaker_Development-Environment_48.svg",
  "aws:res_robomaker_fleet_management": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Robotics/Res_AWS-RoboMaker_Fleet-Management_48.svg",
  "aws:res_robomaker_simulation": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_Robotics/Res_AWS-RoboMaker_Simulation_48.svg",
  "aws:robomaker": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Robotics/64/Arch_AWS-RoboMaker_64.svg",
  "aws:res_workspaces_family_amazon_workspaces": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_End-User-Computing/Res_Amazon-WorkSpaces-Family_Amazon-WorkSpaces_48.svg",
  "aws:res_workspaces_family_amazon_workspaces_core": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_End-User-Computing/Res_Amazon-WorkSpaces-Family_Amazon-WorkSpaces-Core_48.svg",
  "aws:res_workspaces_family_amazon_workspaces_web": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Resource-Icons/Res_End-User-Computing/Res_Amazon-WorkSpaces-Family_Amazon-WorkSpaces-Web_48.svg",
  "aws:appstream": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_End-User-Computing/64/Arch_Amazon-AppStream_64.svg",
  "aws:worklink": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_End-User-Computing/64/Arch_Amazon-WorkLink_64.svg",
  "aws:workspaces_family": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_End-User-Computing/64/Arch_Amazon-WorkSpaces-Family_64.svg",
  "aws:workspaces_thin_client": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_End-User-Computing/64/Arch_Amazon-WorkSpaces-Thin-Client_64.svg",
  "aws:activate": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-Activate_64.svg",
  "aws:iq": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-IQ_64.svg",
  "aws:managed_services": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-Managed-Services_64.svg",
  "aws:professional_services": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-Professional-Services_64.svg",
  "aws:repost": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-rePost_64.svg",
  "aws:repost_private": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-rePost-Private_64.svg",
  "aws:support": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-Support_64.svg",
  "aws:training_certification": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Customer-Enablement/64/Arch_AWS-Training-Certification_64.svg",
  "aws:gamelift": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Games/64/Arch_Amazon-GameLift_64.svg",
  "aws:gamesparks": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Games/64/Arch_Amazon-GameSparks_64.svg",
  "aws:gamekit": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Games/64/Arch_AWS-GameKit_64.svg",
  "aws:open_3d_engine": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Games/64/Arch_Open-3D-Engine_64.svg",
  "aws:application_cost_profiler": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_AWS-Application-Cost-Profiler_64.svg",
  "aws:billing_conductor": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_AWS-Billing-Conductor_64.svg",
  "aws:budgets": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_AWS-Budgets_64.svg",
  "aws:cost_and_usage_report": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_AWS-Cost-and-Usage-Report_64.svg",
  "aws:cost_explorer": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_AWS-Cost-Explorer_64.svg",
  "aws:reserved_instance_reporting": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_Reserved-Instance-Reporting_64.svg",
  "aws:savings_plans": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Cloud-Financial-Management/64/Arch_Savings-Plans_64.svg",
  "aws:ground_station": "https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/Architecture-Service-Icons/Arch_Satellite/64/Arch_AWS-Ground-Station_64.svg",
  "azure:bot_services": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Bot-Services.svg",
  "azure:cognitive_services": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cognitive-Services.svg",
  "azure:analysis_services": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Analysis-Services.svg",
  "azure:hd_insight_clusters": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/HD-Insight-Clusters.svg",
  "azure:stream_analytics_jobs": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Stream-Analytics-Jobs.svg",
  "azure:time_series_data_sets": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Time-Series-Data-Sets.svg",
  "azure:time_series_insights_environments": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Time-Series-Insights-Environments.svg",
  "azure:time_series_insights_event_sources": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Time-Series-Insights-Event-Sources.svg",
  "azure:workspaces": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Workspaces.svg",
  "azure:api_management_services": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/API-Management-Services.svg",
  "azure:app_registrations": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/App-Registrations.svg",
  "azure:app_service_certificates": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/App-Service-Certificates.svg",
  "azure:app_service_domains": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/App-Service-Domains.svg",
  "azure:app_service_environments": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/App-Service-Environments.svg",
  "azure:app_service_plans": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/App-Service-Plans.svg",
  "azure:app_services": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/App-Services.svg",
  "azure:application_gateways": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Application-Gateways.svg",
  "azure:application_insights": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Application-Insights.svg",
  "azure:application_security_groups": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Application-Security-Groups.svg",
  "azure:automation_accounts": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Automation-Accounts.svg",
  "azure:module": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Module.svg",
  "azure:scheduler": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Scheduler.svg",
  "azure:availability_sets": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Availability-Sets.svg",
  "azure:abs_member": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/ABS-Member.svg",
  "azure:azure_active_directory": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Active-Directory.svg",
  "azure:azure_ad_b2c": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-AD-B2C.svg",
  "azure:azure_ad_domain_services": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-AD-Domain-Services.svg",
  "azure:azure_ad_roles_and_administrators": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-AD-Roles-and-Administrators.svg",
  "azure:azure_arc": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Arc.svg",
  "azure:azure_blockchain_service": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Blockchain-Service.svg",
  "azure:azure_cloud_shell": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Cloud-Shell.svg",
  "azure:azure_cosmos_db": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Cosmos-DB.svg",
  "azure:azure_data_catalog": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Data-Catalog.svg",
  "azure:azure_data_explorer_clusters": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Data-Explorer-Clusters.svg",
  "azure:azure_database_mariadb_server": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Database-MariaDB-Server.svg",
  "azure:azure_database_migration_services": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Database-Migration-Services.svg",
  "azure:azure_database_mysql_server": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Database-MySQL-Server.svg",
  "azure:azure_database_postgresql_server": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Database-PostgreSQL-Server.svg",
  "azure:azure_devops": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-DevOps.svg",
  "azure:azure_firewall_manager": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Firewall-Manager.svg",
  "azure:azure_hcp_cache": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-HCP-Cache.svg",
  "azure:azure_lighthouse": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Lighthouse.svg",
  "azure:azure_maps_accounts": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Maps-Accounts.svg",
  "azure:azure_media_service": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Media-Service.svg",
  "azure:azure_migrate": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Migrate.svg",
  "azure:azure_netapp_files": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-NetApp-Files.svg",
  "azure:azure_sentinel": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Sentinel.svg",
  "azure:azure_sphere": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Sphere.svg",
  "azure:azure_sql_server_stretch_databases": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-SQL-Server-Stretch-Databases.svg",
  "azure:azure_sql_vm": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-SQL-VM.svg",
  "azure:azure_stack": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Stack.svg",
  "azure:azure_stack_edge": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Stack-Edge.svg",
  "azure:azure_synapse_analytics": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Synapse-Analytics.svg",
  "azure:azure_token_service": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Token-Service.svg",
  "azure:azure_workbooks": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Azure-Workbooks.svg",
  "azure:infrastructure_backup": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Infrastructure-Backup.svg",
  "azure:recovery_services_vaults": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Recovery-Services-Vaults.svg",
  "azure:consortium": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Consortium.svg",
  "azure:cache": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cache.svg",
  "azure:cache_redis": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cache-Redis.svg",
  "azure:cdn_profiles": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/CDN-Profiles.svg",
  "azure:avs": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/AVS.svg",
  "azure:batch_accounts": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Batch-Accounts.svg",
  "azure:cloud_services_(classic)": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cloud-Services-(Classic).svg",
  "azure:extensions": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Extensions.svg",
  "azure:function_apps": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Function-Apps.svg",
  "azure:image": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Image.svg",
  "azure:image_definitions": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Image-Definitions.svg",
  "azure:image_versions": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Image-Versions.svg",
  "azure:images": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Images.svg",
  "azure:machinesazurearc": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/MachinesAzureArc.svg",
  "azure:os_images_(classic)": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/OS-Images-(Classic).svg",
  "azure:proximity_placement_groups": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Proximity-Placement-Groups.svg",
  "azure:remote_rendering": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Remote-Rendering.svg",
  "azure:scale": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Scale.svg",
  "azure:server_farm": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Server-Farm.svg",
  "azure:shared_image_galleries": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Shared-Image-Galleries.svg",
  "azure:virtual_clusters": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-Clusters.svg",
  "azure:virtual_machine": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-Machine.svg",
  "azure:virtual_machines_(classic)": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-Machines-(Classic).svg",
  "azure:virtual_network_gateways": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-Network-Gateways.svg",
  "azure:virtual_networks": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-Networks.svg",
  "azure:virtual_networks_(classic)": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-Networks-(Classic).svg",
  "azure:virtual_wans": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Virtual-WANs.svg",
  "azure:vm_images_(classic)": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/VM-Images-(Classic).svg",
  "azure:vm_scale_sets": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/VM-Scale-Sets.svg",
  "azure:windows_virtual_desktop": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Windows-Virtual-Desktop.svg",
  "azure:container_instances": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Container-Instances.svg",
  "azure:container_registries": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Container-Registries.svg",
  "azure:container_services_(deprecated)": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Container-Services-(Deprecated).svg",
  "azure:kubernetes_services": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Kubernetes-Services.svg",
  "azure:mesh_applications": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Mesh-Applications.svg",
  "azure:cost_alerts": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cost-Alerts.svg",
  "azure:cost_analysis": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cost-Analysis.svg",
  "azure:cost_budgets": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cost-Budgets.svg",
  "azure:cost_management": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cost-Management.svg",
  "azure:data_box": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Box.svg",
  "azure:data_box_edge": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Box-Edge.svg",
  "azure:data_factory": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Factory.svg",
  "azure:data_lake_storage_gen1": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Lake-Storage-Gen1.svg",
  "azure:data_lake_store_gen1": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Lake-Store-Gen1.svg",
  "azure:data_share_invitations": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Share-Invitations.svg",
  "azure:data_shares": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Data-Shares.svg",
  "azure:import_export_jobs": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Import-Export-Jobs.svg",
  "azure:elastic_job_agents": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Elastic-Job-Agents.svg",
  "azure:instance_pools": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Instance-Pools.svg",
  "azure:production_ready_database": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Production-Ready-Database.svg",
  "azure:sql_data_warehouses": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SQL-Data-Warehouses.svg",
  "azure:sql_database": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SQL-Database.svg",
  "azure:sql_elastic_pools": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SQL-Elastic-Pools.svg",
  "azure:sql_managed_instance": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SQL-Managed-Instance.svg",
  "azure:sql_server": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SQL-Server.svg",
  "azure:backlog": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Backlog.svg",
  "azure:branch": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Branch.svg",
  "azure:bug": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Bug.svg",
  "azure:builds": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Builds.svg",
  "azure:code": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Code.svg",
  "azure:commit": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Commit.svg",
  "azure:dev_console": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Dev-Console.svg",
  "azure:devtest_labs": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/DevTest-Labs.svg",
  "azure:lab_services": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Lab-Services.svg",
  "azure:powershell": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Powershell.svg",
  "azure:process_explorer": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Process-Explorer.svg",
  "azure:tfs_vc_repository": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/TFS-VC-Repository.svg",
  "azure:device_provisioning_services": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Device-Provisioning-Services.svg",
  "azure:device_security_apple": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Device-Security-Apple.svg",
  "azure:device_security_google": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Device-Security-Google.svg",
  "azure:device_security_windows": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Device-Security-Windows.svg",
  "azure:sap_azure_monitor": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SAP-Azure-Monitor.svg",
  "azure:event_grid_domains": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Event-Grid-Domains.svg",
  "azure:event_grid_subscriptions": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Event-Grid-Subscriptions.svg",
  "azure:event_grid_topics": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Event-Grid-Topics.svg",
  "azure:event_hub_clusters": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Event-Hub-Clusters.svg",
  "azure:event_hubs": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Event-Hubs.svg",
  "azure:notification_hub_namespaces": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Notification-Hub-Namespaces.svg",
  "azure:notification_hubs": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Notification-Hubs.svg",
  "azure:relays": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Relays.svg",
  "azure:active_directory_connect_health": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Active-Directory-Connect-Health.svg",
  "azure:conditional_access": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Conditional-Access.svg",
  "azure:enterprise_applications": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Enterprise-Applications.svg",
  "azure:groups": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Groups.svg",
  "azure:identity_governance": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Identity-Governance.svg",
  "azure:multi_tenancy": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Multi-Tenancy.svg",
  "azure:user_privacy": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/User-Privacy.svg",
  "azure:user_subscriptions": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/User-Subscriptions.svg",
  "azure:users": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Users.svg",
  "azure:biz_talk": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Biz-Talk.svg",
  "azure:integration_accounts": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Integration-Accounts.svg",
  "azure:logic_apps": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Logic-Apps.svg",
  "azure:workflow": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Workflow.svg",
  "azure:digital_twins": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Digital-Twins.svg",
  "azure:iot_central_applications": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/IoT-Central-Applications.svg",
  "azure:iot_edge": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/IoT-Edge.svg",
  "azure:iot_hub": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/IoT-Hub.svg",
  "azure:journey_hub": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Journey-Hub.svg",
  "azure:rtos": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/RTOS.svg",
  "azure:managed_applications_center": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Managed-Applications-Center.svg",
  "azure:managed_database": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Managed-Database.svg",
  "azure:advisor": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Advisor.svg",
  "azure:blueprints": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Blueprints.svg",
  "azure:capacity": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Capacity.svg",
  "azure:management_groups": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Management-Groups.svg",
  "azure:management_portal": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Management-Portal.svg",
  "azure:my_customers": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/My-Customers.svg",
  "azure:plans": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Plans.svg",
  "azure:policy": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Policy.svg",
  "azure:reservations": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Reservations.svg",
  "azure:solutions": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Solutions.svg",
  "azure:subscriptions": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Subscriptions.svg",
  "azure:tags": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Tags.svg",
  "azure:updates": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Updates.svg",
  "azure:marketplace": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Marketplace.svg",
  "azure:offers": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Offers.svg",
  "azure:software_as_a_service": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Software-as-a-Service.svg",
  "azure:media": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Media.svg",
  "azure:media_file": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Media-File.svg",
  "azure:mobile": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Mobile.svg",
  "azure:mobile_engagement": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Mobile-Engagement.svg",
  "azure:activity_log": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Activity-Log.svg",
  "azure:alerts": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Alerts.svg",
  "azure:diagnostics_settings": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Diagnostics-Settings.svg",
  "azure:log_analytics_workspaces": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Log-Analytics-Workspaces.svg",
  "azure:log_streaming": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Log-Streaming.svg",
  "azure:metrics": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Metrics.svg",
  "azure:monitor": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Monitor.svg",
  "azure:operation_log_(classic)": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Operation-Log-(Classic).svg",
  "azure:workbooks": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Workbooks.svg",
  "azure:connections": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Connections.svg",
  "azure:dns_zones": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/DNS-Zones.svg",
  "azure:expressroute_circuits": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/ExpressRoute-Circuits.svg",
  "azure:front_doors": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Front-Doors.svg",
  "azure:ftp": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/FTP.svg",
  "azure:internet_analyzer_profiles": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Internet-Analyzer-Profiles.svg",
  "azure:ip_groups": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/IP-Groups.svg",
  "azure:load_balancers": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Load-Balancers.svg",
  "azure:load_test": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Load-Test.svg",
  "azure:nat": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/NAT.svg",
  "azure:network_interfaces": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Network-Interfaces.svg",
  "azure:network_security_groups": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Network-Security-Groups.svg",
  "azure:network_watcher": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Network-Watcher.svg",
  "azure:outbound_connection": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Outbound-Connection.svg",
  "azure:peering_service": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Peering-Service.svg",
  "azure:private_link": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Private-Link.svg",
  "azure:private_link_hub": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Private-Link-Hub.svg",
  "azure:private_link_service": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Private-Link-Service.svg",
  "azure:public_ip_addresses": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Public-IP-Addresses.svg",
  "azure:public_ip_addresses_(classic)": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Public-IP-Addresses-(Classic).svg",
  "azure:public_ip_prefixes": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Public-IP-Prefixes.svg",
  "azure:reserved_ip_addresses_(classic)": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Reserved-IP-Addresses-(Classic).svg",
  "azure:route_filters": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Route-Filters.svg",
  "azure:route_tables": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Route-Tables.svg",
  "azure:traffic_manager_profiles": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Traffic-Manager-Profiles.svg",
  "azure:elixir_purple": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Elixir-Purple.svg",
  "azure:all_resources": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/All-Resources.svg",
  "azure:resource_graph_explorer": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Resource-Graph-Explorer.svg",
  "azure:resource_group_list": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Resource-Group-List.svg",
  "azure:resource_groups": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Resource-Groups.svg",
  "azure:resource_linked": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Resource-Linked.svg",
  "azure:search": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Search.svg",
  "azure:search_grid": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Search-Grid.svg",
  "azure:search_services": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Search-Services.svg",
  "azure:compliance": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Compliance.svg",
  "azure:ddos_protection_plans": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/DDoS-Protection-Plans.svg",
  "azure:detonation": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Detonation.svg",
  "azure:extendedsecurityupdates": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/ExtendedSecurityUpdates.svg",
  "azure:firewalls": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Firewalls.svg",
  "azure:key_vaults": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Key-Vaults.svg",
  "azure:keys": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Keys.svg",
  "azure:security_center": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Security-Center.svg",
  "azure:service_bus": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Service-Bus.svg",
  "azure:service_endpoint_policies": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Service-Endpoint-Policies.svg",
  "azure:service_fabric_clusters": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Service-Fabric-Clusters.svg",
  "azure:service_health": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Service-Health.svg",
  "azure:service_providers": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Service-Providers.svg",
  "azure:education": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Education.svg",
  "azure:learn": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Learn.svg",
  "azure:universal_print": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Universal-Print.svg",
  "azure:blob_block": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Blob-Block.svg",
  "azure:blob_page": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Blob-Page.svg",
  "azure:disk_encryption_sets": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Disk-Encryption-Sets.svg",
  "azure:disks": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Disks.svg",
  "azure:disks_(classic)": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Disks-(Classic).svg",
  "azure:disks_snapshots": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Disks-Snapshots.svg",
  "azure:file": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/File.svg",
  "azure:files": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Files.svg",
  "azure:ssd": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/SSD.svg",
  "azure:storage_accounts": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Storage-Accounts.svg",
  "azure:storage_accounts_(classic)": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Storage-Accounts-(Classic).svg",
  "azure:storage_azure_files": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Storage-Azure-Files.svg",
  "azure:storage_container": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Storage-Container.svg",
  "azure:storage_queue": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Storage-Queue.svg",
  "azure:storage_sync_services": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Storage-Sync-Services.svg",
  "azure:storsimple_data_managers": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/StorSimple-Data-Managers.svg",
  "azure:storsimple_device_managers": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/StorSimple-Device-Managers.svg",
  "azure:table": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Table.svg",
  "azure:browser": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Browser.svg",
  "azure:controls": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Controls.svg",
  "azure:controls_horizontal": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Controls-Horizontal.svg",
  "azure:counter": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Counter.svg",
  "azure:cubes": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Cubes.svg",
  "azure:dashboard": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Dashboard.svg",
  "azure:download": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Download.svg",
  "azure:error": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Error.svg",
  "azure:folder_blank": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Folder-Blank.svg",
  "azure:folder_website": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Folder-Website.svg",
  "azure:gear": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Gear.svg",
  "azure:globe": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Globe.svg",
  "azure:globe_error": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Globe-Error.svg",
  "azure:globe_success": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Globe-Success.svg",
  "azure:globe_warning": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Globe-Warning.svg",
  "azure:guide": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Guide.svg",
  "azure:heart": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Heart.svg",
  "azure:help_and_support": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Help-and-Support.svg",
  "azure:information": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Information.svg",
  "azure:input_output": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Input-Output.svg",
  "azure:launch_portal": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Launch-Portal.svg",
  "azure:location": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Location.svg",
  "azure:power": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Power.svg",
  "azure:power_up": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Power-Up.svg",
  "azure:preview": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Preview.svg",
  "azure:quickstart_center": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Quickstart-Center.svg",
  "azure:recent": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Recent.svg",
  "azure:toolbox": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Toolbox.svg",
  "azure:versions": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Versions.svg",
  "azure:static_apps": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Static-Apps.svg",
  "azure:web_application_firewall_policies(waf)": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Web-Application-Firewall-Policies(WAF).svg",
  "azure:web_environment": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Web-Environment.svg",
  "azure:web_slots": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Web-Slots.svg",
  "azure:web_test": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Web-Test.svg",
  "azure:website_power": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Website-Power.svg",
  "azure:website_staging": "https://cdn.jsdelivr.net/gh/benc-uk/icon-collection/azure-icons/Website-Staging.svg",
  "google-cloud:advanced_agent_modeling": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/advanced_agent_modeling.svg",
  "google-cloud:advanced_solutions_lab": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/advanced_solutions_lab.svg",
  "google-cloud:agent_assist": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/agent_assist.svg",
  "google-cloud:ai_hub": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/ai_hub.svg",
  "google-cloud:ai_platform": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/ai_platform.svg",
  "google-cloud:ai_platform_unified": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/ai_platform_unified.svg",
  "google-cloud:automl": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/automl.svg",
  "google-cloud:automl_natural_language": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/automl_natural_language.svg",
  "google-cloud:automl_tables": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/automl_tables.svg",
  "google-cloud:automl_translation": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/automl_translation.svg",
  "google-cloud:automl_video_intelligence": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/automl_video_intelligence.svg",
  "google-cloud:automl_vision": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/automl_vision.svg",
  "google-cloud:cloud_inference_api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_inference_api.svg",
  "google-cloud:cloud_jobs_api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_jobs_api.svg",
  "google-cloud:cloud_natural_language_api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_natural_language_api.svg",
  "google-cloud:cloud_optimization_ai": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_optimization_ai.svg",
  "google-cloud:cloud_optimization_ai_-_fleet_routing_api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_optimization_ai_-_fleet_routing_api.svg",
  "google-cloud:cloud_translation_api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_translation_api.svg",
  "google-cloud:cloud_vision_api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_vision_api.svg",
  "google-cloud:dialogflow": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dialogflow.svg",
  "google-cloud:dialogflow_cx": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dialogflow_cx.svg",
  "google-cloud:dialogflow_insights": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dialogflow_insights.svg",
  "google-cloud:document_ai": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/document_ai.svg",
  "google-cloud:recommendations_ai": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/recommendations_ai.svg",
  "google-cloud:speech-to-text": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/speech-to-text.svg",
  "google-cloud:tensorflow_enterprise": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/tensorflow_enterprise.svg",
  "google-cloud:text-to-speech": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/text-to-speech.svg",
  "google-cloud:vertexai": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/vertexai.svg",
  "google-cloud:video_intelligence_api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/video_intelligence_api.svg",
  "google-cloud:visual_inspection": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/visual_inspection.svg",
  "google-cloud:analytics_hub": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/analytics_hub.svg",
  "google-cloud:bigquery": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/bigquery.svg",
  "google-cloud:looker": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/looker.svg",
  "google-cloud:real-world_insights": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/real-world_insights.svg",
  "google-cloud:stream_suite": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/stream_suite.svg",
  "google-cloud:api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/api.svg",
  "google-cloud:api_analytics": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/api_analytics.svg",
  "google-cloud:api_monetization": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/api_monetization.svg",
  "google-cloud:apigee_api_platform": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/apigee_api_platform.svg",
  "google-cloud:apigee_sense": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/apigee_sense.svg",
  "google-cloud:cloud_api_gateway": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_api_gateway.svg",
  "google-cloud:cloud_apis": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_apis.svg",
  "google-cloud:cloud_endpoints": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_endpoints.svg",
  "google-cloud:producer_portal": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/producer_portal.svg",
  "google-cloud:app_engine": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/app_engine.svg",
  "google-cloud:bare_metal_solutions": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/bare_metal_solutions.svg",
  "google-cloud:batch": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/batch.svg",
  "google-cloud:cloud_functions": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_functions.svg",
  "google-cloud:cloud_gpu": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_gpu.svg",
  "google-cloud:cloud_run": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_run.svg",
  "google-cloud:cloud_run_for_anthos": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_run_for_anthos.svg",
  "google-cloud:cloud_scheduler": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_scheduler.svg",
  "google-cloud:cloud_tasks": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_tasks.svg",
  "google-cloud:cloud_tpu": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_tpu.svg",
  "google-cloud:compute_engine": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/compute_engine.svg",
  "google-cloud:os_configuration_management": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/os_configuration_management.svg",
  "google-cloud:os_inventory_management": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/os_inventory_management.svg",
  "google-cloud:os_patch_management": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/os_patch_management.svg",
  "google-cloud:quantum_engine": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/quantum_engine.svg",
  "google-cloud:vmware_engine": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/vmware_engine.svg",
  "google-cloud:anthos": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/anthos.svg",
  "google-cloud:anthos_config_management": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/anthos_config_management.svg",
  "google-cloud:anthos_service_mesh": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/anthos_service_mesh.svg",
  "google-cloud:container_optimized_os": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/container_optimized_os.svg",
  "google-cloud:container_registry": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/container_registry.svg",
  "google-cloud:gke_on-prem": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/gke_on-prem.svg",
  "google-cloud:kuberun": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/kuberun.svg",
  "google-cloud:catalog": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/catalog.svg",
  "google-cloud:cloud_composer": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_composer.svg",
  "google-cloud:cloud_data_fusion": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_data_fusion.svg",
  "google-cloud:data_catalog": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_catalog.svg",
  "google-cloud:data_labeling": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_labeling.svg",
  "google-cloud:data_layers": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_layers.svg",
  "google-cloud:data_loss_prevention_api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_loss_prevention_api.svg",
  "google-cloud:data_qna": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_qna.svg",
  "google-cloud:data_studio": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_studio.svg",
  "google-cloud:data_transfer": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/data_transfer.svg",
  "google-cloud:dataflow": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dataflow.svg",
  "google-cloud:datalab": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/datalab.svg",
  "google-cloud:dataplex": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dataplex.svg",
  "google-cloud:datapol": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/datapol.svg",
  "google-cloud:dataprep": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dataprep.svg",
  "google-cloud:dataproc": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dataproc.svg",
  "google-cloud:dataproc_metastore": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/dataproc_metastore.svg",
  "google-cloud:datashare": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/datashare.svg",
  "google-cloud:datastream": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/datastream.svg",
  "google-cloud:transfer": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/transfer.svg",
  "google-cloud:bigtable": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/bigtable.svg",
  "google-cloud:cloud_spanner": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_spanner.svg",
  "google-cloud:cloud_sql": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_sql.svg",
  "google-cloud:database_migration_service": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/database_migration_service.svg",
  "google-cloud:datastore": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/datastore.svg",
  "google-cloud:firestore": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/firestore.svg",
  "google-cloud:memorystore": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/memorystore.svg",
  "google-cloud:artifact_registry": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/artifact_registry.svg",
  "google-cloud:cloud_build": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_build.svg",
  "google-cloud:cloud_code": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_code.svg",
  "google-cloud:cloud_deploy": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_deploy.svg",
  "google-cloud:cloud_shell": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_shell.svg",
  "google-cloud:cloud_test_lab": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_test_lab.svg",
  "google-cloud:debugger": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/debugger.svg",
  "google-cloud:developer_portal": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/developer_portal.svg",
  "google-cloud:profiler": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/profiler.svg",
  "google-cloud:release_notes": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/release_notes.svg",
  "google-cloud:tools_for_powershell": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/tools_for_powershell.svg",
  "google-cloud:eventarc": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/eventarc.svg",
  "google-cloud:pubsub": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/pubsub.svg",
  "google-cloud:game_servers": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/game_servers.svg",
  "google-cloud:cloud_generic": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_generic.svg",
  "google-cloud:early_access_center": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/early_access_center.svg",
  "google-cloud:free_trial": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/free_trial.svg",
  "google-cloud:home": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/home.svg",
  "google-cloud:launcher": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/launcher.svg",
  "google-cloud:my_cloud": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/my_cloud.svg",
  "google-cloud:onboarding": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/onboarding.svg",
  "google-cloud:google_cloud_marketplace": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/google_cloud_marketplace.svg",
  "google-cloud:google_kubernetes_engine": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/google_kubernetes_engine.svg",
  "google-cloud:google_maps_platform": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/google_maps_platform.svg",
  "google-cloud:cloud_healthcare_api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_healthcare_api.svg",
  "google-cloud:cloud_healthcare_marketplace": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_healthcare_marketplace.svg",
  "google-cloud:genomics": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/genomics.svg",
  "google-cloud:healthcare_nlp_api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/healthcare_nlp_api.svg",
  "google-cloud:identity_and_access_management": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/identity_and_access_management.svg",
  "google-cloud:identity_platform": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/identity_platform.svg",
  "google-cloud:identity-aware_proxy": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/identity-aware_proxy.svg",
  "google-cloud:managed_service_for_microsoft_active_directory": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/managed_service_for_microsoft_active_directory.svg",
  "google-cloud:permissions": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/permissions.svg",
  "google-cloud:user_preferences": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/user_preferences.svg",
  "google-cloud:workload_identity_pool": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/workload_identity_pool.svg",
  "google-cloud:connectors": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/connectors.svg",
  "google-cloud:workflows": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/workflows.svg",
  "google-cloud:iot_core": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/iot_core.svg",
  "google-cloud:iot_edge": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/iot_edge.svg",
  "google-cloud:administration": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/administration.svg",
  "google-cloud:asset_inventory": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/asset_inventory.svg",
  "google-cloud:billing": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/billing.svg",
  "google-cloud:cloud_asset_inventory": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_asset_inventory.svg",
  "google-cloud:cloud_audit_logs": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_audit_logs.svg",
  "google-cloud:cloud_deployment_manager": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_deployment_manager.svg",
  "google-cloud:configuration_management": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/configuration_management.svg",
  "google-cloud:gce_systems_management": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/gce_systems_management.svg",
  "google-cloud:policy_analyzer": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/policy_analyzer.svg",
  "google-cloud:project": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/project.svg",
  "google-cloud:quotas": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/quotas.svg",
  "google-cloud:runtime_config": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/runtime_config.svg",
  "google-cloud:service_discovery": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/service_discovery.svg",
  "google-cloud:financial_services_marketplace": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/financial_services_marketplace.svg",
  "google-cloud:partner_interconnect": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/partner_interconnect.svg",
  "google-cloud:partner_portal": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/partner_portal.svg",
  "google-cloud:cloud_media_edge": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_media_edge.svg",
  "google-cloud:media_translation_api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/media_translation_api.svg",
  "google-cloud:migrate_for_anthos": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/migrate_for_anthos.svg",
  "google-cloud:migrate_for_compute_engine": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/migrate_for_compute_engine.svg",
  "google-cloud:transfer_appliance": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/transfer_appliance.svg",
  "google-cloud:cloud_logging": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_logging.svg",
  "google-cloud:cloud_monitoring": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_monitoring.svg",
  "google-cloud:cloud_ops": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_ops.svg",
  "google-cloud:error_reporting": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/error_reporting.svg",
  "google-cloud:performance_dashboard": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/performance_dashboard.svg",
  "google-cloud:stackdriver": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/stackdriver.svg",
  "google-cloud:trace": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/trace.svg",
  "google-cloud:cloud_cdn": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_cdn.svg",
  "google-cloud:cloud_dns": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_dns.svg",
  "google-cloud:cloud_domains": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_domains.svg",
  "google-cloud:cloud_external_ip_addresses": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_external_ip_addresses.svg",
  "google-cloud:cloud_firewall_rules": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_firewall_rules.svg",
  "google-cloud:cloud_interconnect": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_interconnect.svg",
  "google-cloud:cloud_load_balancing": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_load_balancing.svg",
  "google-cloud:cloud_nat": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_nat.svg",
  "google-cloud:cloud_network": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_network.svg",
  "google-cloud:cloud_router": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_router.svg",
  "google-cloud:cloud_routes": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_routes.svg",
  "google-cloud:cloud_vpn": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_vpn.svg",
  "google-cloud:connectivity_test": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/connectivity_test.svg",
  "google-cloud:local_ssd": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/local_ssd.svg",
  "google-cloud:network_connectivity_center": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/network_connectivity_center.svg",
  "google-cloud:network_intelligence_center": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/network_intelligence_center.svg",
  "google-cloud:network_security": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/network_security.svg",
  "google-cloud:network_tiers": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/network_tiers.svg",
  "google-cloud:network_topology": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/network_topology.svg",
  "google-cloud:premium_network_tier": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/premium_network_tier.svg",
  "google-cloud:private_connectivity": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/private_connectivity.svg",
  "google-cloud:private_service_connect": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/private_service_connect.svg",
  "google-cloud:standard_network_tier": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/standard_network_tier.svg",
  "google-cloud:traffic_director": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/traffic_director.svg",
  "google-cloud:virtual_private_cloud": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/virtual_private_cloud.svg",
  "google-cloud:access_context_manager": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/access_context_manager.svg",
  "google-cloud:assured_workloads": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/assured_workloads.svg",
  "google-cloud:beyondcorp": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/beyondcorp.svg",
  "google-cloud:binary_authorization": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/binary_authorization.svg",
  "google-cloud:certificate_authority_service": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/certificate_authority_service.svg",
  "google-cloud:certificate_manager": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/certificate_manager.svg",
  "google-cloud:cloud_armor": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_armor.svg",
  "google-cloud:cloud_ekm": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_ekm.svg",
  "google-cloud:cloud_hsm": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_hsm.svg",
  "google-cloud:cloud_ids": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_ids.svg",
  "google-cloud:cloud_security_scanner": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_security_scanner.svg",
  "google-cloud:key_access_justifications": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/key_access_justifications.svg",
  "google-cloud:key_management_service": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/key_management_service.svg",
  "google-cloud:phishing_protection": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/phishing_protection.svg",
  "google-cloud:risk_manager": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/risk_manager.svg",
  "google-cloud:secret_manager": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/secret_manager.svg",
  "google-cloud:security": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/security.svg",
  "google-cloud:security_command_center": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/security_command_center.svg",
  "google-cloud:security_health_advisor": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/security_health_advisor.svg",
  "google-cloud:security_key_enforcement": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/security_key_enforcement.svg",
  "google-cloud:web_risk": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/web_risk.svg",
  "google-cloud:web_security_scanner": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/web_security_scanner.svg",
  "google-cloud:contact_center_ai": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/contact_center_ai.svg",
  "google-cloud:support": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/support.svg",
  "google-cloud:cloud_for_marketing": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_for_marketing.svg",
  "google-cloud:fleet_engine": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/fleet_engine.svg",
  "google-cloud:retail_api": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/retail_api.svg",
  "google-cloud:cloud_storage": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/cloud_storage.svg",
  "google-cloud:filestore": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/filestore.svg",
  "google-cloud:persistent_disk": "https://raw.githubusercontent.com/AwesomeLogos/google-cloud-icons/main/docs/images/persistent_disk.svg",
  "tech-stack:python": "https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg",
  "tech-stack:javascript": "https://cdn.jsdelivr.net/npm/simple-icons/icons/javascript.svg",
  "tech-stack:typescript": "https://cdn.jsdelivr.net/npm/simple-icons/icons/typescript.svg",
  "tech-stack:go": "https://cdn.jsdelivr.net/npm/simple-icons/icons/go.svg",
  "tech-stack:rust": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rust.svg",
  "tech-stack:ruby": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ruby.svg",
  "tech-stack:php": "https://cdn.jsdelivr.net/npm/simple-icons/icons/php.svg",
  "tech-stack:swift": "https://cdn.jsdelivr.net/npm/simple-icons/icons/swift.svg",
  "tech-stack:kotlin": "https://cdn.jsdelivr.net/npm/simple-icons/icons/kotlin.svg",
  "tech-stack:scala": "https://cdn.jsdelivr.net/npm/simple-icons/icons/scala.svg",
  "tech-stack:elixir": "https://cdn.jsdelivr.net/npm/simple-icons/icons/elixir.svg",
  "tech-stack:dart": "https://cdn.jsdelivr.net/npm/simple-icons/icons/dart.svg",
  "tech-stack:perl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/perl.svg",
  "tech-stack:lua": "https://cdn.jsdelivr.net/npm/simple-icons/icons/lua.svg",
  "tech-stack:haskell": "https://cdn.jsdelivr.net/npm/simple-icons/icons/haskell.svg",
  "tech-stack:julia": "https://cdn.jsdelivr.net/npm/simple-icons/icons/julia.svg",
  "tech-stack:fortran": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fortran.svg",
  "tech-stack:c": "https://cdn.jsdelivr.net/npm/simple-icons/icons/c.svg",
  "tech-stack:cplusplus": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cplusplus.svg",
  "tech-stack:r": "https://cdn.jsdelivr.net/npm/simple-icons/icons/r.svg",
  "tech-stack:clojure": "https://cdn.jsdelivr.net/npm/simple-icons/icons/clojure.svg",
  "tech-stack:erlang": "https://cdn.jsdelivr.net/npm/simple-icons/icons/erlang.svg",
  "tech-stack:fsharp": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fsharp.svg",
  "tech-stack:crystal": "https://cdn.jsdelivr.net/npm/simple-icons/icons/crystal.svg",
  "tech-stack:nim": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nim.svg",
  "tech-stack:zig": "https://cdn.jsdelivr.net/npm/simple-icons/icons/zig.svg",
  "tech-stack:odin": "https://cdn.jsdelivr.net/npm/simple-icons/icons/odin.svg",
  "tech-stack:v": "https://cdn.jsdelivr.net/npm/simple-icons/icons/v.svg",
  "tech-stack:react": "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg",
  "tech-stack:vuedotjs": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vuedotjs.svg",
  "tech-stack:angular": "https://cdn.jsdelivr.net/npm/simple-icons/icons/angular.svg",
  "tech-stack:svelte": "https://cdn.jsdelivr.net/npm/simple-icons/icons/svelte.svg",
  "tech-stack:nextdotjs": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nextdotjs.svg",
  "tech-stack:gatsby": "https://cdn.jsdelivr.net/npm/simple-icons/icons/gatsby.svg",
  "tech-stack:astro": "https://cdn.jsdelivr.net/npm/simple-icons/icons/astro.svg",
  "tech-stack:solid": "https://cdn.jsdelivr.net/npm/simple-icons/icons/solid.svg",
  "tech-stack:lit": "https://cdn.jsdelivr.net/npm/simple-icons/icons/lit.svg",
  "tech-stack:preact": "https://cdn.jsdelivr.net/npm/simple-icons/icons/preact.svg",
  "tech-stack:remix": "https://cdn.jsdelivr.net/npm/simple-icons/icons/remix.svg",
  "tech-stack:qwik": "https://cdn.jsdelivr.net/npm/simple-icons/icons/qwik.svg",
  "tech-stack:alpinedotjs": "https://cdn.jsdelivr.net/npm/simple-icons/icons/alpinedotjs.svg",
  "tech-stack:storybook": "https://cdn.jsdelivr.net/npm/simple-icons/icons/storybook.svg",
  "tech-stack:tailwindcss": "https://cdn.jsdelivr.net/npm/simple-icons/icons/tailwindcss.svg",
  "tech-stack:bootstrap": "https://cdn.jsdelivr.net/npm/simple-icons/icons/bootstrap.svg",
  "tech-stack:sass": "https://cdn.jsdelivr.net/npm/simple-icons/icons/sass.svg",
  "tech-stack:less": "https://cdn.jsdelivr.net/npm/simple-icons/icons/less.svg",
  "tech-stack:postcss": "https://cdn.jsdelivr.net/npm/simple-icons/icons/postcss.svg",
  "tech-stack:vite": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vite.svg",
  "tech-stack:webpack": "https://cdn.jsdelivr.net/npm/simple-icons/icons/webpack.svg",
  "tech-stack:esbuild": "https://cdn.jsdelivr.net/npm/simple-icons/icons/esbuild.svg",
  "tech-stack:html5": "https://cdn.jsdelivr.net/npm/simple-icons/icons/html5.svg",
  "tech-stack:webcomponentsdotorg": "https://cdn.jsdelivr.net/npm/simple-icons/icons/webcomponentsdotorg.svg",
  "tech-stack:threedotjs": "https://cdn.jsdelivr.net/npm/simple-icons/icons/threedotjs.svg",
  "tech-stack:babel": "https://cdn.jsdelivr.net/npm/simple-icons/icons/babel.svg",
  "tech-stack:eslint": "https://cdn.jsdelivr.net/npm/simple-icons/icons/eslint.svg",
  "tech-stack:prettier": "https://cdn.jsdelivr.net/npm/simple-icons/icons/prettier.svg",
  "tech-stack:nodedotjs": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nodedotjs.svg",
  "tech-stack:express": "https://cdn.jsdelivr.net/npm/simple-icons/icons/express.svg",
  "tech-stack:fastapi": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fastapi.svg",
  "tech-stack:flask": "https://cdn.jsdelivr.net/npm/simple-icons/icons/flask.svg",
  "tech-stack:django": "https://cdn.jsdelivr.net/npm/simple-icons/icons/django.svg",
  "tech-stack:springboot": "https://cdn.jsdelivr.net/npm/simple-icons/icons/springboot.svg",
  "tech-stack:laravel": "https://cdn.jsdelivr.net/npm/simple-icons/icons/laravel.svg",
  "tech-stack:rubyonrails": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rubyonrails.svg",
  "tech-stack:gin": "https://cdn.jsdelivr.net/npm/simple-icons/icons/gin.svg",
  "tech-stack:fastify": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fastify.svg",
  "tech-stack:nestjs": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nestjs.svg",
  "tech-stack:koa": "https://cdn.jsdelivr.net/npm/simple-icons/icons/koa.svg",
  "tech-stack:hono": "https://cdn.jsdelivr.net/npm/simple-icons/icons/hono.svg",
  "tech-stack:adonisjs": "https://cdn.jsdelivr.net/npm/simple-icons/icons/adonisjs.svg",
  "tech-stack:actix": "https://cdn.jsdelivr.net/npm/simple-icons/icons/actix.svg",
  "tech-stack:rocket": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rocket.svg",
  "tech-stack:googlecloud": "https://cdn.jsdelivr.net/npm/simple-icons/icons/googlecloud.svg",
  "tech-stack:digitalocean": "https://cdn.jsdelivr.net/npm/simple-icons/icons/digitalocean.svg",
  "tech-stack:vercel": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vercel.svg",
  "tech-stack:netlify": "https://cdn.jsdelivr.net/npm/simple-icons/icons/netlify.svg",
  "tech-stack:cloudflare": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cloudflare.svg",
  "tech-stack:vultr": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vultr.svg",
  "tech-stack:render": "https://cdn.jsdelivr.net/npm/simple-icons/icons/render.svg",
  "tech-stack:railway": "https://cdn.jsdelivr.net/npm/simple-icons/icons/railway.svg",
  "tech-stack:flydotio": "https://cdn.jsdelivr.net/npm/simple-icons/icons/flydotio.svg",
  "tech-stack:upcloud": "https://cdn.jsdelivr.net/npm/simple-icons/icons/upcloud.svg",
  "tech-stack:scaleway": "https://cdn.jsdelivr.net/npm/simple-icons/icons/scaleway.svg",
  "tech-stack:hetzner": "https://cdn.jsdelivr.net/npm/simple-icons/icons/hetzner.svg",
  "tech-stack:civo": "https://cdn.jsdelivr.net/npm/simple-icons/icons/civo.svg",
  "tech-stack:akamai": "https://cdn.jsdelivr.net/npm/simple-icons/icons/akamai.svg",
  "tech-stack:postgresql": "https://cdn.jsdelivr.net/npm/simple-icons/icons/postgresql.svg",
  "tech-stack:mysql": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mysql.svg",
  "tech-stack:mongodb": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg",
  "tech-stack:redis": "https://cdn.jsdelivr.net/npm/simple-icons/icons/redis.svg",
  "tech-stack:elasticsearch": "https://cdn.jsdelivr.net/npm/simple-icons/icons/elasticsearch.svg",
  "tech-stack:mariadb": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mariadb.svg",
  "tech-stack:sqlite": "https://cdn.jsdelivr.net/npm/simple-icons/icons/sqlite.svg",
  "tech-stack:apachecassandra": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apachecassandra.svg",
  "tech-stack:couchbase": "https://cdn.jsdelivr.net/npm/simple-icons/icons/couchbase.svg",
  "tech-stack:neo4j": "https://cdn.jsdelivr.net/npm/simple-icons/icons/neo4j.svg",
  "tech-stack:influxdb": "https://cdn.jsdelivr.net/npm/simple-icons/icons/influxdb.svg",
  "tech-stack:firebase": "https://cdn.jsdelivr.net/npm/simple-icons/icons/firebase.svg",
  "tech-stack:supabase": "https://cdn.jsdelivr.net/npm/simple-icons/icons/supabase.svg",
  "tech-stack:planetscale": "https://cdn.jsdelivr.net/npm/simple-icons/icons/planetscale.svg",
  "tech-stack:cockroachlabs": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cockroachlabs.svg",
  "tech-stack:timescale": "https://cdn.jsdelivr.net/npm/simple-icons/icons/timescale.svg",
  "tech-stack:surrealdb": "https://cdn.jsdelivr.net/npm/simple-icons/icons/surrealdb.svg",
  "tech-stack:clickhouse": "https://cdn.jsdelivr.net/npm/simple-icons/icons/clickhouse.svg",
  "tech-stack:duckdb": "https://cdn.jsdelivr.net/npm/simple-icons/icons/duckdb.svg",
  "tech-stack:arangodb": "https://cdn.jsdelivr.net/npm/simple-icons/icons/arangodb.svg",
  "tech-stack:dgraph": "https://cdn.jsdelivr.net/npm/simple-icons/icons/dgraph.svg",
  "tech-stack:fauna": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fauna.svg",
  "tech-stack:turso": "https://cdn.jsdelivr.net/npm/simple-icons/icons/turso.svg",
  "tech-stack:docker": "https://cdn.jsdelivr.net/npm/simple-icons/icons/docker.svg",
  "tech-stack:kubernetes": "https://cdn.jsdelivr.net/npm/simple-icons/icons/kubernetes.svg",
  "tech-stack:terraform": "https://cdn.jsdelivr.net/npm/simple-icons/icons/terraform.svg",
  "tech-stack:ansible": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ansible.svg",
  "tech-stack:jenkins": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jenkins.svg",
  "tech-stack:circleci": "https://cdn.jsdelivr.net/npm/simple-icons/icons/circleci.svg",
  "tech-stack:githubactions": "https://cdn.jsdelivr.net/npm/simple-icons/icons/githubactions.svg",
  "tech-stack:gitlab": "https://cdn.jsdelivr.net/npm/simple-icons/icons/gitlab.svg",
  "tech-stack:bitbucket": "https://cdn.jsdelivr.net/npm/simple-icons/icons/bitbucket.svg",
  "tech-stack:travisci": "https://cdn.jsdelivr.net/npm/simple-icons/icons/travisci.svg",
  "tech-stack:teamcity": "https://cdn.jsdelivr.net/npm/simple-icons/icons/teamcity.svg",
  "tech-stack:argo": "https://cdn.jsdelivr.net/npm/simple-icons/icons/argo.svg",
  "tech-stack:helm": "https://cdn.jsdelivr.net/npm/simple-icons/icons/helm.svg",
  "tech-stack:puppet": "https://cdn.jsdelivr.net/npm/simple-icons/icons/puppet.svg",
  "tech-stack:chef": "https://cdn.jsdelivr.net/npm/simple-icons/icons/chef.svg",
  "tech-stack:vagrant": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vagrant.svg",
  "tech-stack:packer": "https://cdn.jsdelivr.net/npm/simple-icons/icons/packer.svg",
  "tech-stack:pulumi": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pulumi.svg",
  "tech-stack:rancher": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rancher.svg",
  "tech-stack:portainer": "https://cdn.jsdelivr.net/npm/simple-icons/icons/portainer.svg",
  "tech-stack:podman": "https://cdn.jsdelivr.net/npm/simple-icons/icons/podman.svg",
  "tech-stack:containerd": "https://cdn.jsdelivr.net/npm/simple-icons/icons/containerd.svg",
  "tech-stack:istio": "https://cdn.jsdelivr.net/npm/simple-icons/icons/istio.svg",
  "tech-stack:linkerd": "https://cdn.jsdelivr.net/npm/simple-icons/icons/linkerd.svg",
  "tech-stack:consul": "https://cdn.jsdelivr.net/npm/simple-icons/icons/consul.svg",
  "tech-stack:vault": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vault.svg",
  "tech-stack:nomad": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nomad.svg",
  "tech-stack:apachekafka": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apachekafka.svg",
  "tech-stack:rabbitmq": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rabbitmq.svg",
  "tech-stack:mqtt": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mqtt.svg",
  "tech-stack:apachepulsar": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apachepulsar.svg",
  "tech-stack:prometheus": "https://cdn.jsdelivr.net/npm/simple-icons/icons/prometheus.svg",
  "tech-stack:grafana": "https://cdn.jsdelivr.net/npm/simple-icons/icons/grafana.svg",
  "tech-stack:datadog": "https://cdn.jsdelivr.net/npm/simple-icons/icons/datadog.svg",
  "tech-stack:newrelic": "https://cdn.jsdelivr.net/npm/simple-icons/icons/newrelic.svg",
  "tech-stack:elastic": "https://cdn.jsdelivr.net/npm/simple-icons/icons/elastic.svg",
  "tech-stack:splunk": "https://cdn.jsdelivr.net/npm/simple-icons/icons/splunk.svg",
  "tech-stack:dynatrace": "https://cdn.jsdelivr.net/npm/simple-icons/icons/dynatrace.svg",
  "tech-stack:sentry": "https://cdn.jsdelivr.net/npm/simple-icons/icons/sentry.svg",
  "tech-stack:honeybadger": "https://cdn.jsdelivr.net/npm/simple-icons/icons/honeybadger.svg",
  "tech-stack:jaeger": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jaeger.svg",
  "tech-stack:opentelemetry": "https://cdn.jsdelivr.net/npm/simple-icons/icons/opentelemetry.svg",
  "tech-stack:logstash": "https://cdn.jsdelivr.net/npm/simple-icons/icons/logstash.svg",
  "tech-stack:kibana": "https://cdn.jsdelivr.net/npm/simple-icons/icons/kibana.svg",
  "tech-stack:fluentd": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fluentd.svg",
  "tech-stack:uptimekuma": "https://cdn.jsdelivr.net/npm/simple-icons/icons/uptimekuma.svg",
  "tech-stack:nginx": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nginx.svg",
  "tech-stack:apache": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apache.svg",
  "tech-stack:caddy": "https://cdn.jsdelivr.net/npm/simple-icons/icons/caddy.svg",
  "tech-stack:envoyproxy": "https://cdn.jsdelivr.net/npm/simple-icons/icons/envoyproxy.svg",
  "tech-stack:git": "https://cdn.jsdelivr.net/npm/simple-icons/icons/git.svg",
  "tech-stack:github": "https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg",
  "tech-stack:jira": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jira.svg",
  "tech-stack:confluence": "https://cdn.jsdelivr.net/npm/simple-icons/icons/confluence.svg",
  "tech-stack:discord": "https://cdn.jsdelivr.net/npm/simple-icons/icons/discord.svg",
  "tech-stack:figma": "https://cdn.jsdelivr.net/npm/simple-icons/icons/figma.svg",
  "tech-stack:notion": "https://cdn.jsdelivr.net/npm/simple-icons/icons/notion.svg",
  "tech-stack:trello": "https://cdn.jsdelivr.net/npm/simple-icons/icons/trello.svg",
  "tech-stack:asana": "https://cdn.jsdelivr.net/npm/simple-icons/icons/asana.svg",
  "tech-stack:linear": "https://cdn.jsdelivr.net/npm/simple-icons/icons/linear.svg",
  "tech-stack:postman": "https://cdn.jsdelivr.net/npm/simple-icons/icons/postman.svg",
  "tech-stack:insomnia": "https://cdn.jsdelivr.net/npm/simple-icons/icons/insomnia.svg",
  "tech-stack:swagger": "https://cdn.jsdelivr.net/npm/simple-icons/icons/swagger.svg",
  "tech-stack:graphql": "https://cdn.jsdelivr.net/npm/simple-icons/icons/graphql.svg",
  "tech-stack:curl": "https://cdn.jsdelivr.net/npm/simple-icons/icons/curl.svg",
  "tech-stack:miro": "https://cdn.jsdelivr.net/npm/simple-icons/icons/miro.svg",
  "tech-stack:clickup": "https://cdn.jsdelivr.net/npm/simple-icons/icons/clickup.svg",
  "tech-stack:todoist": "https://cdn.jsdelivr.net/npm/simple-icons/icons/todoist.svg",
  "tech-stack:airtable": "https://cdn.jsdelivr.net/npm/simple-icons/icons/airtable.svg",
  "tech-stack:linux": "https://cdn.jsdelivr.net/npm/simple-icons/icons/linux.svg",
  "tech-stack:ubuntu": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ubuntu.svg",
  "tech-stack:debian": "https://cdn.jsdelivr.net/npm/simple-icons/icons/debian.svg",
  "tech-stack:fedora": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fedora.svg",
  "tech-stack:archlinux": "https://cdn.jsdelivr.net/npm/simple-icons/icons/archlinux.svg",
  "tech-stack:centos": "https://cdn.jsdelivr.net/npm/simple-icons/icons/centos.svg",
  "tech-stack:alpinelinux": "https://cdn.jsdelivr.net/npm/simple-icons/icons/alpinelinux.svg",
  "tech-stack:apple": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apple.svg",
  "tech-stack:ios": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ios.svg",
  "tech-stack:android": "https://cdn.jsdelivr.net/npm/simple-icons/icons/android.svg",
  "tech-stack:redhat": "https://cdn.jsdelivr.net/npm/simple-icons/icons/redhat.svg",
  "tech-stack:opensuse": "https://cdn.jsdelivr.net/npm/simple-icons/icons/opensuse.svg",
  "tech-stack:manjaro": "https://cdn.jsdelivr.net/npm/simple-icons/icons/manjaro.svg",
  "tech-stack:nixos": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nixos.svg",
  "tech-stack:voidlinux": "https://cdn.jsdelivr.net/npm/simple-icons/icons/voidlinux.svg",
  "tech-stack:gentoo": "https://cdn.jsdelivr.net/npm/simple-icons/icons/gentoo.svg",
  "tech-stack:freebsd": "https://cdn.jsdelivr.net/npm/simple-icons/icons/freebsd.svg",
  "tech-stack:openbsd": "https://cdn.jsdelivr.net/npm/simple-icons/icons/openbsd.svg",
  "tech-stack:tensorflow": "https://cdn.jsdelivr.net/npm/simple-icons/icons/tensorflow.svg",
  "tech-stack:pytorch": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pytorch.svg",
  "tech-stack:huggingface": "https://cdn.jsdelivr.net/npm/simple-icons/icons/huggingface.svg",
  "tech-stack:scikitlearn": "https://cdn.jsdelivr.net/npm/simple-icons/icons/scikitlearn.svg",
  "tech-stack:keras": "https://cdn.jsdelivr.net/npm/simple-icons/icons/keras.svg",
  "tech-stack:mlflow": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mlflow.svg",
  "tech-stack:jupyter": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jupyter.svg",
  "tech-stack:pandas": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pandas.svg",
  "tech-stack:numpy": "https://cdn.jsdelivr.net/npm/simple-icons/icons/numpy.svg",
  "tech-stack:opencv": "https://cdn.jsdelivr.net/npm/simple-icons/icons/opencv.svg",
  "tech-stack:langchain": "https://cdn.jsdelivr.net/npm/simple-icons/icons/langchain.svg",
  "tech-stack:weightsandbiases": "https://cdn.jsdelivr.net/npm/simple-icons/icons/weightsandbiases.svg",
  "tech-stack:apacheairflow": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apacheairflow.svg",
  "tech-stack:apachespark": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apachespark.svg",
  "tech-stack:databricks": "https://cdn.jsdelivr.net/npm/simple-icons/icons/databricks.svg",
  "tech-stack:googlecolab": "https://cdn.jsdelivr.net/npm/simple-icons/icons/googlecolab.svg",
  "tech-stack:kaggle": "https://cdn.jsdelivr.net/npm/simple-icons/icons/kaggle.svg",
  "tech-stack:anaconda": "https://cdn.jsdelivr.net/npm/simple-icons/icons/anaconda.svg",
  "tech-stack:scipy": "https://cdn.jsdelivr.net/npm/simple-icons/icons/scipy.svg",
  "tech-stack:plotly": "https://cdn.jsdelivr.net/npm/simple-icons/icons/plotly.svg",
  "tech-stack:letsencrypt": "https://cdn.jsdelivr.net/npm/simple-icons/icons/letsencrypt.svg",
  "tech-stack:auth0": "https://cdn.jsdelivr.net/npm/simple-icons/icons/auth0.svg",
  "tech-stack:okta": "https://cdn.jsdelivr.net/npm/simple-icons/icons/okta.svg",
  "tech-stack:snyk": "https://cdn.jsdelivr.net/npm/simple-icons/icons/snyk.svg",
  "tech-stack:dependabot": "https://cdn.jsdelivr.net/npm/simple-icons/icons/dependabot.svg",
  "tech-stack:owasp": "https://cdn.jsdelivr.net/npm/simple-icons/icons/owasp.svg",
  "tech-stack:wireshark": "https://cdn.jsdelivr.net/npm/simple-icons/icons/wireshark.svg",
  "tech-stack:jest": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jest.svg",
  "tech-stack:mocha": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mocha.svg",
  "tech-stack:jasmine": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jasmine.svg",
  "tech-stack:cypress": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cypress.svg",
  "tech-stack:selenium": "https://cdn.jsdelivr.net/npm/simple-icons/icons/selenium.svg",
  "tech-stack:puppeteer": "https://cdn.jsdelivr.net/npm/simple-icons/icons/puppeteer.svg",
  "tech-stack:pytest": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pytest.svg",
  "tech-stack:vitest": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vitest.svg",
  "tech-stack:testinglibrary": "https://cdn.jsdelivr.net/npm/simple-icons/icons/testinglibrary.svg",
  "tech-stack:cucumber": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cucumber.svg",
  "tech-stack:vim": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vim.svg",
  "tech-stack:neovim": "https://cdn.jsdelivr.net/npm/simple-icons/icons/neovim.svg",
  "tech-stack:jetbrains": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jetbrains.svg",
  "tech-stack:intellijidea": "https://cdn.jsdelivr.net/npm/simple-icons/icons/intellijidea.svg",
  "tech-stack:pycharm": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pycharm.svg",
  "tech-stack:webstorm": "https://cdn.jsdelivr.net/npm/simple-icons/icons/webstorm.svg",
  "tech-stack:goland": "https://cdn.jsdelivr.net/npm/simple-icons/icons/goland.svg",
  "tech-stack:rider": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rider.svg",
  "tech-stack:sublimetext": "https://cdn.jsdelivr.net/npm/simple-icons/icons/sublimetext.svg",
  "tech-stack:eclipseide": "https://cdn.jsdelivr.net/npm/simple-icons/icons/eclipseide.svg",
  "tech-stack:xcode": "https://cdn.jsdelivr.net/npm/simple-icons/icons/xcode.svg",
  "tech-stack:npm": "https://cdn.jsdelivr.net/npm/simple-icons/icons/npm.svg",
  "tech-stack:yarn": "https://cdn.jsdelivr.net/npm/simple-icons/icons/yarn.svg",
  "tech-stack:pnpm": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pnpm.svg",
  "tech-stack:bun": "https://cdn.jsdelivr.net/npm/simple-icons/icons/bun.svg",
  "tech-stack:deno": "https://cdn.jsdelivr.net/npm/simple-icons/icons/deno.svg",
  "tech-stack:homebrew": "https://cdn.jsdelivr.net/npm/simple-icons/icons/homebrew.svg",
  "tech-stack:chocolatey": "https://cdn.jsdelivr.net/npm/simple-icons/icons/chocolatey.svg",
  "tech-stack:snapcraft": "https://cdn.jsdelivr.net/npm/simple-icons/icons/snapcraft.svg",
  "tech-stack:flatpak": "https://cdn.jsdelivr.net/npm/simple-icons/icons/flatpak.svg",
  "tech-stack:stripe": "https://cdn.jsdelivr.net/npm/simple-icons/icons/stripe.svg",
  "tech-stack:paypal": "https://cdn.jsdelivr.net/npm/simple-icons/icons/paypal.svg",
  "tech-stack:square": "https://cdn.jsdelivr.net/npm/simple-icons/icons/square.svg",
  "tech-stack:shopify": "https://cdn.jsdelivr.net/npm/simple-icons/icons/shopify.svg",
  "tech-stack:mailchimp": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mailchimp.svg",
  "tech-stack:mapbox": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mapbox.svg",
  "tech-stack:algolia": "https://cdn.jsdelivr.net/npm/simple-icons/icons/algolia.svg",
  "tech-stack:meilisearch": "https://cdn.jsdelivr.net/npm/simple-icons/icons/meilisearch.svg",
  "tech-stack:contentful": "https://cdn.jsdelivr.net/npm/simple-icons/icons/contentful.svg",
  "tech-stack:strapi": "https://cdn.jsdelivr.net/npm/simple-icons/icons/strapi.svg",
  "tech-stack:sanity": "https://cdn.jsdelivr.net/npm/simple-icons/icons/sanity.svg",
  "tech-stack:ghost": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ghost.svg",
  "tech-stack:wordpress": "https://cdn.jsdelivr.net/npm/simple-icons/icons/wordpress.svg",
  "tech-stack:anthropic": "https://cdn.jsdelivr.net/npm/simple-icons/icons/anthropic.svg",
  "tech-stack:ollama": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ollama.svg"
};
