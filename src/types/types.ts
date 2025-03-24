export interface resumeInfo{
    lastName: string;
    firstName: string;
    jobTitle: string;
    themeColor: string;
    address: string;
    phone: string;
    email: string;
    summary:string;
    experience:[{
        title: string;
        companyName: string;
        city: string;
        startDate: string;
        endDate: string;
        currentlyWorking:boolean
        workSummary:string;
    }]
}