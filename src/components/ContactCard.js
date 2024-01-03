export default function ContactCard() {
    return (
        <div id="contact-info" className="vcard p-1 sm:p-1">
            <h1 className="fn text-2xl sm:text-4xl">Wesley Reid</h1>
            <p className="text-sm sm:text-base">
                Cell: 727-645-1930
                <br />
                Email: <a className="email" href="mailto:wesleyreid0@gmail.com">wesleyreid0@gmail.com</a>
                <br />
                <a href="https://linkedin.com/in/starhound" className="block sm:inline-block">Linkedin</a>&emsp;
                <a href="https://github.com/starhound" className="block sm:inline-block">Github</a>
                <br />
            </p>
        </div>
    )
}
