export default function WorkExperienceResponsibilityList({ items }) {
    return (
        <ul className="list-disc pl-5">
            {items.map((item, index) => (
                <li className="pb-1" key={index}>{item}</li>
            ))}
        </ul>
    );
}
