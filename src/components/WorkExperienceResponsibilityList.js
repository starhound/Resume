export default function WorkExperienceResponsibilityList({ items }) {
  return (
    <ul className="responsibilities">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
