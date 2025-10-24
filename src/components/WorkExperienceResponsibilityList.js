export default function WorkExperienceResponsibilityList({ items }) {
    return (
        <ul className="list-disc pl-5 sm:pl-5 my-3">
            {items.map((item, index) => (
                <li className="pb-2 text-base sm:text-base leading-relaxed" key={index}>{item}</li>
            ))}
        </ul>
    );
}
