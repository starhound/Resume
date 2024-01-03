export default function Education() {
    return (
        <dl className="flex flex-col sm:flex-row sm:justify-between p-2 sm:pt-2 sm:pb-2 sm:pl-8 sm:pr-8">
            <dt className="text-lg sm:text-xl font-bold">Education</dt>
            <dd className="mt-2 sm:mt-0 sm:pl-4">
                <div className="flex flex-col sm:flex-row items-center">
                    <h2 className="text-base sm:text-lg font-bold">Technology Development and Management</h2>
                    <span className="mt-1 sm:mt-0 sm:ml-2 text-xs sm:text-base">2020-Current</span>
                </div>
                <p className="text-sm sm:text-base">Bachelor of Science - Saint Petersburg College: Tarpon Springs, FL</p>

                <div className="flex flex-col sm:flex-row items-center">
                    <h2 className="text-base sm:text-lg font-bold">Computer Programming and Analysis</h2>
                    <span className="mt-1 sm:mt-0 sm:ml-2 text-xs sm:text-base">2018 - 2020</span>
                </div>
                <p className="text-sm sm:text-base">Associate in Science - Saint Petersburg College: Tarpon Springs, FL</p>

                <div className="flex flex-col sm:flex-row items-center">
                    <h2 className="text-base sm:text-lg font-bold">Computer Maintenance Technology</h2>
                    <span className="mt-1 sm:mt-0 sm:ml-2 text-xs sm:text-base">2010-2012</span>
                </div>
                <p className="text-sm sm:text-base">Certificate of Competition - Marchman Technical College: New Port Richey, FL</p>
            </dd>
        </dl>
    )
}
