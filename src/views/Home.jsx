import Picture from "../components/image/picture";

export default function Home(){
    return (
    <div className="container ">
        <div className="row justify-content-center" style={{marginTop:'100px'}}>
            <div className="col-sm-12 col-md-4 col-lg-5 px-5">
                <Picture image ="myimage.png" classList = "w-100 shadow-lg p-3 mb-4 bg-body rounded"/>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-7 mt-4 px-5">
                <h2 className="mb-4" style={{color:'#04293A', fontFamily:'revert'}}>Mohammed Samy</h2>
                <h6 className="mb-2" style={{color:'#270082'}}>Full-Stack Developer</h6>
                <p className="text-muted fs-5 my-1 mb-3 ps-3">
                    <span style={{color:'#FD5D5D', fontSize:'1.5rem', fontWeight:'bold', fontFamily:'cursive'}}>S</span>oftware Engineer with good knowledge of programming and writing code. looking for a good opportunity to apply my knowledge and enhance my technical skills.</p>
            </div>
        </div>
    </div>
    );
}