interface IconClass {
    iconClass:string
}

interface IActivity {
    _id: string,
    activityName: string,
    activityDescription: string,
    image: string
}

type IProject = {
    _id: string,
    projectName: string,
    projecDescription: string,
    projectClient: string,
    imageUrls: ImageProps[]
}

type ImageProps = {
    url: string,
    width: number,
    height: number,
}