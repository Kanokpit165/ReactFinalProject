import React, { Component } from "react"
import profilepic from '../img/profile.jpg'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic_About">About Me</h1>
                <img src={profilepic} alt="profile" className="profilepic_about" />
                <p>
                    ชีวิตในสายงานกราฟิกของผม มันเริ่มมาจากการได้เห็นหลายสิ่งหลายอย่างบนโลกใบนี้
                    จากศิลปะและอารยธรรมอันงดงามที่มนุษย์ได้สร้างขึ้น ผมจึงชอบงานที่ต้องใช้จินตนาการ
                    ในการมองและนึกคิดถึงความหมายต่างๆ ในผลงานเพื่อสร้างสรรค์งานให้ออกมาดีที่สุด
                </p>

                <h3 className="signature_1">กนกพิชญ์ รัตนาศิริภิรมย์</h3>
                <h3 className="signature_1">Graphic Designer</h3>
            </div>
        )
    }
}

export default About;