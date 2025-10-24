import React from 'react';

function ProgrammingLanguages() {
    return (
        <dl className="flex flex-col sm:flex-row sm:justify-between p-4 sm:pt-2 sm:pb-2 sm:pl-8 sm:pr-8">
            <dt className="text-xl sm:text-xl font-bold mb-2 sm:mb-0">Programming Languages</dt>
            <dd className="sm:pl-4">
                <p className="text-base sm:text-base leading-relaxed">
                    Bash, Bicep, C/C++, C#, ColdFusion, Erlang, Go, Java (11, 17), Javascript/TypeScript, Kotlin, 
                    LPC, LUA, MicroPython, Perl, PHP, Powershell, Python, Ruby, Terraform, Visual Basic, XML/XAML/XSLT, YAML
                </p>
            </dd>
        </dl>
    )
}
export default ProgrammingLanguages;