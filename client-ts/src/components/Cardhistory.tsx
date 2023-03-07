import { useNavigate, useParams } from 'react-router-dom';
import PaymentStatus from "../models/paymentStatus";

interface Props {
    statusData: PaymentStatus
}

function Cardhistory(props: Props) {
    const reviewData = props.statusData ? props.statusData.attributes : null;
    const image = reviewData?.image_url;
    const tourType = reviewData?.tour_type;
    const tour = reviewData?.tour_name;
    const status = reviewData?.status;
    const tourId = reviewData?.tour_id;
    const Datetour = reviewData?.tour_start;
    const navigate = useNavigate();

    const LinkToComment = () => {
        navigate(`/TripDetailPage/${tourId}/review?tour_id=${tourId}&tour_name=${tour}`);
    }

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{tour} ({tourType})</h5>
                    <p className="card-text" style={{ fontSize: "1rem", color: "#555", fontWeight: "bold" }}>
                        เริ่มเดินทางวันที่: <span style={{ color: "#2971e6", fontWeight: "bold" }}>{Datetour}</span>
                        <br></br>
                        สถานะการจอง: <span style={{ color: "#FF5C5C", fontWeight: "bold" }}>{status}</span>
                    </p>
                    <a onClick={LinkToComment} className="btn btn-outline-success btn-sm float-end" style={{ marginLeft: "0.1rem" }}>แสดงความคิดเห็น</a>
                </div>
            </div>
        </div>
    );
}

export default Cardhistory;
