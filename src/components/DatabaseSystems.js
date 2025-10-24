export default function DatabaseSystems() {
    return (
        <dl className="flex flex-col sm:flex-row sm:justify-between p-4 sm:pt-2 sm:pb-2 sm:pl-8 sm:pr-8">
            <dt className="text-xl sm:text-xl font-bold mb-2 sm:mb-0">Database Systems</dt>
            <dd className="sm:pl-4">
                <p className="text-base sm:text-base leading-relaxed">
                    CouchDB, CosmosDB, DynamoDB, Elasticsearch/OpenStack, GraphQL, MariaDB, MarkLogic, 
                    MongoDB, MS-SQL Server, MySQL, Oracle, PostgreSQL, Redis, SAP HANA, SQLite
                </p>
            </dd>
        </dl>
    )
}