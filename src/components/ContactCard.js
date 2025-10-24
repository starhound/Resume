export default function ContactCard() {
    const handlePrint = () => {
        window.print();
    };

    const handleScheduleMeeting = () => {
        //open a new window
        window.open('https://calendly.com/wesley_reid/video-conference', '_blank');
    }

    return (
        <div id="contact-info" className="vcard p-4 sm:p-1">
            <h1 className="fn text-3xl sm:text-4xl">Wesley Reid</h1>
            <p className="text-base sm:text-base mt-2">
                Cell: 727-645-1930
                <br />
                Email: <a className="email" href="mailto:wesleyreid0@gmail.com">wesleyreid0@gmail.com</a>
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-0">
                <a href="https://linkedin.com/in/starhound" className="inline-block">Linkedin</a>
                <span className="hidden sm:inline">&emsp;</span>
                <a href="https://github.com/starhound" className="inline-block">Github</a>
                <span className="hidden sm:inline">&emsp;</span>
                <button onClick={handlePrint} className="no-print print-button text-left sm:inline-block">
                    <p className="no-print">Print</p>
                </button>
                <button onClick={handleScheduleMeeting} className="no-print print-button mt-0 sm:ml-2 text-left sm:inline-block">
                    <p className="no-print">Schedule a Meeting</p>
                </button>
            </div>
            <br className="hidden sm:block" />
        </div>
    )
}
