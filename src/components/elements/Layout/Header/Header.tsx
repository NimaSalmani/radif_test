import Breadcrump from "@/src/components/common/Breadcrump/Breadcrump"
import Title from "@/src/components/common/Text/Title/Title"
import Para from "@/src/components/common/Text/Para/Para"
const Header = () => {
  return (
    <header className="flex flex-col gap-16">
        <Breadcrump/>
        <div className="flex gap-4 flex-col">
            <Title/>
            <Para/>
        </div>
    </header>
  )
}

export default Header