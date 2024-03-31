export default function Navbar ({appName}:{appName:string}) {
    return (
        <div className="flex justify-between w-full box-border h-16">
            <h1><span className="inline-block align-middle">{appName}</span></h1>
            <button>connect wallet</button>
        </div>
    )
}