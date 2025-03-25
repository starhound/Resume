import React from 'react';

function ProgrammingLanguages() {
    return (
        <dl className="flex flex-col sm:flex-row sm:justify-between p-2 sm:pt-2 sm:pb-2 sm:pl-8 sm:pr-8">
            <dt className="text-lg sm:text-xl font-bold">Programming Languages</dt>
            <dd className="mt-2 sm:mt-0 sm:pl-4">
                <p className="text-sm sm:text-base">
                    Bash, Bicep, C/C++, C#, ColdFusion, Erlang, Go, Java (11, 17), Javascript/TypeScript, Kotlin, 
                    LPC, LUA, MicroPython, Perl, PHP, Powershell, Python, Ruby, Terraform, Visual Basic, XML/XAML/XSLT, YAML
                </p>
            </dd>
        </dl>
    )
}
export default ProgrammingLanguages;