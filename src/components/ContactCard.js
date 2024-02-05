export default function ContactCard() {
    const handlePrint = () => {
        window.print();
    };

    const handleScheduleMeeting = () => {
        //open a new window
        window.open('https://calendly.com/wesley_reid/video-conference', '_blank');
    }

    return (
        <div id="contact-info" className="vcard p-1 sm:p-1">
            <h1 className="fn text-2xl sm:text-4xl">Wesley Reid</h1>
            <p className="text-sm sm:text-base">
                Cell: 727-645-1930
                <br />
                Email: <a className="email" href="mailto:wesleyreid0@gmail.com">wesleyreid0@gmail.com</a>
            </p>
            <div className="">
                <a href="https://linkedin.com/in/starhound" className="block sm:inline-block">Linkedin</a>&emsp;
                <a href="https://github.com/starhound" className="block sm:inline-block">Github</a>&emsp;
                <button onClick={handlePrint} className="no-print block sm:inline-block print-button"><p className="no-print">Print</p></button>
                <button onClick={handleScheduleMeeting} className="no-print block ml-2 sm:inline-block print-button">
                    <p className="no-print">Schedule a Meeting</p>
                </button>
            </div>
            <br />
        </div>
    )
}
