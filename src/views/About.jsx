export default function About(){
    return (
        <div className="container">
            <div className="row">
                <table  className="table table-danger text-center fs-5">
                    <tbody>
                        <tr>
                            <th className="bg-secondary text-light text-start ps-4">Name</th>
                            <td>Mohamed Samy</td>
                        </tr>
                        <tr>
                            <th className="bg-secondary text-light text-start ps-4">Phone Number</th>
                            <td>+20 106 677 0958</td>
                        </tr>
                        <tr>
                            <th className="bg-secondary text-light text-start ps-4">Email</th>
                            <td>Eng.muhamed.samy@gmail.com</td>
                        </tr>
                        <tr>
                            <th className="bg-secondary text-light text-start ps-4">Linked In</th>
                            <td><a style={{textDecoration:'none', color:'black'}} href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin" target="_blank" rel="noreferrer">Linked In Profile</a></td>
                        </tr>
                        <tr>
                            <th className="bg-secondary text-light text-start ps-4">Github</th>
                            <td><a style={{textDecoration:'none', color:'black'}} href="https://github.com/Eng-Muhammed-Samy" target="_blank" rel="noreferrer">Github Profile</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}