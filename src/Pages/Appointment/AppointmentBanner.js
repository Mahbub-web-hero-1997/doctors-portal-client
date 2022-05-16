import { DayPicker } from 'react-day-picker';
import chair from '../../Images/images/chair.png'

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen w-11/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;