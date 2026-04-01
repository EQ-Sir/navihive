/**
 * For more details on how to configure Wrangler, refer to:
 * https://developers.cloudflare.com/workers/wrangler/configuration/
 */
{
    "$schema": "node_modules/wrangler/config-schema.json",
    "name": "navihive",
    "main": "worker/index.ts",
    "compatibility_date": "2025-04-05",
    "compatibility_flags": ["nodejs_compat"],  // 必须启用 Node.js 兼容
    "assets": {
        "not_found_handling": "single-page-application"
    },
    "observability": {
        "enabled": true
    },
    // D1数据库绑定
    "d1_databases": [
        {
            "binding": "DB",
            "database_name": "navigation-db",
            "database_id": "ce47ccac-08eb-44ca-8c0a-9362ccfbafe1"
        }
    ],
    "vars": {
        "AUTH_ENABLED": "true",
        "AUTH_USERNAME": "admin",
        "AUTH_PASSWORD": "aaaa1111",
        "AUTH_SECRET": "$2y$10$9xF7sQ2k.Z8tD5vB1nM3cG6hJ8pL1mN4pR7sU0vW2xY5zA9bC3dEQfG"
    }
}




