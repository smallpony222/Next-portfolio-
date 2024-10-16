import CardLayout from "../../Common/CardLayout"
import Badge from './Badge';

const SkillsCard = ({ data, title}) => {
    return (
        <CardLayout>
            <div className="h-full space-y-2 p-8 card_stylings">
                <div className=" text-Snow">{title}</div>
                {/* <div className="text-sm text-LightGray font-normal"> */}
        <div className='flex flex-wrap gap-2'>
                    {data.map((item, index) => (
                        <Badge key={index} title={item} />
                    ))}
                </div>
            </div>
        </CardLayout>
    )
}

export default SkillsCard;