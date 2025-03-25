export default function DatabaseSystems() {
    return (
        <dl className="flex flex-col sm:flex-row sm:justify-between p-2 sm:pt-2 sm:pb-2 sm:pl-8 sm:pr-8">
            <dt className="text-lg sm:text-xl font-bold">Database Systems</dt>
            <dd className="mt-2 sm:mt-0 sm:pl-4">
                <p className="text-sm sm:text-base">
                    CouchDB, CosmosDB, DynamoDB, Elasticsearch/OpenStack, GraphQL, MariaDB, MarkLogic, 
                    MongoDB, MS-SQL Server, MySQL, Oracle, PostgreSQL, Redis, SAP HANA, SQLite
                </p>
            </dd>
        </dl>
    )
}