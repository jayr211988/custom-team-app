

async function getDetails() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response =  await res.json()
    return response;
}

export default async function DashboardPages() {
    const details = await getDetails();
    console.log(details, 'details')
    return <div>
        <h1>Notes Pages</h1>
        <ul className="list-disc">
            {details.map((post, i) => (
                <li className="travelcompany-input" key={i}>
                    <span className="input-label">id: {post['userId']} Name: {post['title']}</span>
                </li>
            ))}
        </ul>
    </div>
}