import { useRouter } from "next/router"
interface IProps {
  click : any
  item : {
    count : number
    text : string
    id : number
    active : boolean
    activeClass : string
    deActiveClasses : string
  }

}


const StepButton = ({click,item}:IProps) => {
  const router = useRouter()
  const tab = router.query.tab as string; 
  return (
    <div
      onClick={click}
      className={`
        p-16 rounded-8 flex items-center gap-12 w-full cursor-pointer
        ${item?.id.toString() == tab ? item?.activeClass : item?.deActiveClasses }
      `}
    >
        <div className="w-56 h-48 rounded-8 bg-white flex items-center justify-center text-18 text-green-950 font-iransanBold">{item.count}</div>
        <span className=" text-18 text-green-950 font-iransanMd">{item.text}</span>
    </div>
  )
}

export default StepButton