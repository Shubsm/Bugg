import bugModel  from '../Models/bugModel'


export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:234232423,
        name:"Crash On Load",
        details:"Crashes after 3 second",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Shubham Mittal",
        creator:"Shubh",
        priority:1,
        time:"22:34"
    }))


    data.push(new bugModel({
        _id:234232423,
        name:"Wont Load",
        details:"Crashes after 3 second",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Shubham Mittal",
        creator:"Shubh",
        priority:3,
        time:"22:34"
    }))

    let sorted = data.sort((a,b)=>{
        return a.priority - b.priority;
    })
    return sorted;
}


