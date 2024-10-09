import real1 from './assets/storage/real1.png'
import real2 from './assets/storage/real2.png'
import real3 from './assets/storage/real3.png'
import pulse1 from './assets/storage/pulse1.png'
import pulse2 from './assets/storage/pulse2.png'
import pulse3 from './assets/storage/pulse3.png'
import snake1 from './assets/storage/snake1.png'
import snake2 from './assets/storage/snake2.png'
import snake3 from './assets/storage/snake3.png'
import login1 from './assets/storage/login1.png'
import login2 from './assets/storage/login2.png'
import login3 from './assets/storage/login3.png'
import jagan1 from './assets/storage/jagan1.png'
import jagan2 from './assets/storage/jagan2.png'
import jagan3 from './assets/storage/jagan3.png'
import host1 from './assets/storage/host1.png'
import host2 from './assets/storage/host2.png'
import host3 from './assets/storage/host3.png'
import ev1 from './assets/storage/ev1 .png'
import ev2 from './assets/storage/ev2.png'
import ev3 from './assets/storage/ev3.png'
import bus1 from './assets/storage/bus1.png'
import bus2 from './assets/storage/bus2.png'
import bus3 from './assets/storage/bus3.png'

export const profileObject={
    pname:"Dhaanyaakumaar g s",
    desc:"Electrical and Electronics engineer",
    linkedin:"https://www.linkedin.com/in/dkganesh",
    github:"https://github.com/dkganesh",
    mail:'/contact',
    leetcode:"https://leetcode.com/dk__tamilan/",
    insta:"https://www.instagram.com/dk__tamilan/"
}
export const Aboutconst={
    title:"About",
    desc:"I’m Dhaanyaakumaar G S, an aspiring Software Engineer with a solid foundation in Java, Spring Boot, React.js and MySQL. I have done my Bachelor’s in Electrical and Electronics Engineering at SVCE, Chennai, with experience in EV charging systems, full-stack web development and freelancing. Notable projects include a Hostel Portal for SVCE, web app using Spring Security and JWT, and an Integrated EV Charging System. I’m skilled in web development tools like Postman, Git, and Netlify, with a keen interest in Full stack web development, IoT, ethical hacking, and Home automation. My goal is to build impactful digital solutions that solve real-world problems.",
    edu:{
        title:"education",
        subsec:[
            {degname:"Bachelor of Engineering",degdesc:"Done my, Electrical And Electronics Engineering degree at ",inst:"Sri Venkateswara college Of Engineering",degdesc2:"Sriperumbudur,during 2020-2024 with CGPA of ",score:"8.76"},

            {degname:"Higher Secondary Education",degdesc:"Done my, Higher Seconday Education at ",inst:"Jayapriya Sr.Secondary School CBSE",degdesc2:"Virudhachalam, during 2019-2020 with percentage of ",score:"70"},
            
            {degname:"Secondary Education",degdesc:"Done my, Seconday Education at ",inst:"Jawahar Hr.Secondary School CBSE",degdesc2:"Neyveli, during 2017-2018 with percentage of ",score:"88"}
        ]
    },
    interest:{
        title:"Interests",
        list:["Home automation","ethical hacking","programming","pc building","Enthusiasm for culinary pursuits","internet of things"]
    }

};
export const Exp={
    title:"experience",
    head:"Intern trainee [NLC India]",
    content:"I have done two week internship at NLC India Ltd.,[a public sector enterprise in Energy domain] on A Study of Generators and Transformers in TPS-1 Expansion,Where I learned how a Thermal Power station works on real and the safety measures and various precautions implemented, Also the working details of Generators and Transformers used, especially the 13.7KV Induction generator as primary power production device is coupled with internal switch-yard with the maximum step-up range of 220KV is connected to grid and power is supplied to different states of India which is being monitored using SCADA employed systems in the RTU."
}
export const Skills={
    title:"skills",
    skill:['java','java swing','servlets','HTML - CSS','javascript','React','Springboot','git & Github','MS Office','electric power system','electrical machines','linux'],

    data:["Completed Programming for Problem Solving offered by Duke University, a Java programming course from Coursera where I learned concepts of Core Java.","Learned Java GUI - Swing from online Open Sources and gained Knowledge to develop GUI from scratch.","Learned Java Servlet from online Open Sources and gained Knowledge to setup a Servlet.","Learned FrontEnd Web Development by completing course HTML, CSS And JavaScript for web Developers offered by Jhon Hopkins University.","Learned Java Script from Open sources like Youtube.","Learned React JS from online Open Sources and gained skill to work with it.","Learned to use Spring Boot from online Open Sources and gained skill to work with it, Also developed projects with Spring.","Learned to use Git and Git-Hub and gained skill to commit resourses on Git and work with it.","Learned Microsoft Office Suite from available online Open Sources.","Learned the key concepts of Electric Power Systems from my Engineering curricullum.","Learned the key concepts of Electrical Machines from my Engineering curricullum.","Learned basic Linux commands by completing the course Hands-on Introduction to Linux Commands and Shell Scripting offered by IBM."]
}
export const Navbar={
    links:['about','experience','skills','projects','contact']
}
export const Prj={
    title:"Projects",
    projects:[
        {
            ptitle:"Hostel Portel",
            pdesc:"This full stack project was made with Java Spring Boot and React. I created a React app for front-end interfacing, which will have features like student login and staff login seperately, also these where managed by the admin side using a seperate admin login with DB conectivity. The backend will be a Spring Boot API interconnected with cross origin React app(front-end). More over i focus on introducing security hashing techiques to make the web application secure and robust.Since this project is in development stage I have not deployed the project completely.",
            plink:"https://svcehostel.netlify.app",
            pics:[host1,host2,host3]
        },
        {
            ptitle:"Vintage Snake Game",
            pdesc:"This classic Snake game was created in Java utilising Java Swing for the graphical user interface, while the game's functionalities are based on fundamental Java ideas. In addition, I created a Windows executable file for this game, which is located in the exe subdirectory within my git repository.",
            plink:"https://github.com/dkganesh/Vintage-Snake-Game.git",
            pics:[snake1,snake2,snake3]
        },
        {
            ptitle:"Bus Reservation System",
            pdesc:"I used fundamental Java concepts like inheritance, encapsulation, and abstraction in this Java-based project. I have developed packages for data bases and function performance independently for this project. Additionally, the database I've added to the SQL_files subdirectory manages the information for the bus reservation system. Furthermore, a separate class called BusRun_exe.java in Pacakage com.Bus_Reserv_execute handles the system's execution. I have also planned to further extend this project into GUI software, which I am presently working on and will incorporate into this project shortly.",
            plink:"https://github.com/dkganesh/Bus_Reservation_System.git",
            pics:[bus1,bus2,bus3]
        },
        {
            ptitle:"User Registration Management",
            pdesc:"This dynamic web project was made with Java EE and is based on Java. I created a standard HTML form that was later turned to a JavaServelet programme that calls servers to carry out specific tasks. The actions involve registering or signing up for a user account in the database (MySQL DB) and validating the user data while logging in or signing in.Here, I've utilised TOMCAT Server V10.0 and simple servlets and JSP as server-side technologies. The SQL_files subdirectory in my Git-Hub repository has all of the Databse files.",
            plink:"https://github.com/dkganesh/User-Registration.git",
            pics:[login1,login2,login3]
        },
        {
            ptitle:"Pulse2k23 - Symposium Website",
            pdesc:"This is a static webpage that I created for the March 2023 department club symposium. It essentially handles event registration. I used HTML, CSS, and JS on this website, along with some of their frameworks, such Bootstrap CSS. Additionally, this website uses a few JavaScript methods for visual effects and responsiveness. This website has a custom url that we obtained from TechDomains and is published on Github.",
            plink:"https://www.pulse23.tech/",
            pics:[pulse1,pulse2,pulse3]
        },
        {
            ptitle:"Real time Energy Monitoring System",
            pdesc:"An electrical instrument that tracks the amount of electricity used over time is called an energy metre. But this is too archaic to be put into practice in the present world. The Internet of Things (IoT)-enabled energy metre is a recent development that tracks units consumed and uses WiFi to provide data about units and costs. Our team has worked to integrate the fundamentals of automation into the current IoT technology as it develops over time. We plan to replace the current smart energy metre with an ultra-smart one. To be clear, our final product will use a custom firmware-driven additional circuit to oversee the monitored devices and calculate the cost by smart metre. This will minimise energy consumption by shutting off any operating non-essential loads.",
            plink:"https://github.com/dkganesh/Real-Time-Energy-Monitoring-System.git",
            pics:[real1,real2,real3]
        },
       
        {
            ptitle:"Kumar Management Facility Services (KMFS) ",
            pdesc:"This is a client specified company website of 'KMFS'. Mr.Kumar,Managing Director of KMFS (Contact No: 9944939723) contacted me to create a company website of his requirement.Here in this project I have used some open source codes of React and incorporated my design to make this single page React App.",
            plink:"https://jagan-fms.web.app/",
            pics:[jagan1,jagan2,jagan3]
        },
        {
            ptitle:"Integrated On-Board EV Charger Employing bi-directional Converter",
            pdesc:"For applications involving the battery charging of vehicles, there is a constant need for on-board chargers that are dependable, effective, compact, and lightweight. Integrated chargers are created employing the idea of hardware reuse in order to increase the power level of the on-board chargers. By integrating the charger component with the propulsion circuitry, on-board battery chargers can reduce their weight, volume, space, and cost. It is possible to use the EV's traction components in the charging circuit because they are not activated during the charging process. The stator windings of a three-phase traction AC motor can be used as a grid-interfacing inductor filter at the front end of the AC-to-DC converter during the charging mode. The PWM voltage source converter and the bidirectional dc-dc converter are both used while charging. When the system is in drive mode, the PWM scheme is employed to provide the desired motor speed and torque. The proposed system comes with a three-level zero-voltage switching (ZVS) bidirectional dc-dc converter, which will reduce switching losses and increase the overall system efficiency.",
            plink:"https://github.com/dkganesh/Integrated-On-Board-EV-Charging-System.git",
            pics:[ev1,ev2,ev3]
        }     
        
    ]
}