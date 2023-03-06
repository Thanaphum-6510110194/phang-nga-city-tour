import { useEffect, useState } from "react";
import PaymentStatus from "../models/paymentStatus";
import qrcode from 'qrcode';

interface Props {
    statusData: PaymentStatus
}

function CardUserStatus(props: Props) {
    const reviewData = props.statusData ? props.statusData.attributes : null ;
    const image = reviewData?.image_url;
    const tour = reviewData?.tour_name;
    const status = reviewData?.status;

    const [qrCode, setQrCode] = useState<string>('');
    const total_price = reviewData?.total_price as number;

    useEffect(() => {
        qrcode.toDataURL(total_price.toString(), (err, url) => {
            if (err) {
                console.log(err);
            } else {
                setQrCode(url);
            }
        });
    }, [total_price]);

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{tour}</h5>
                    <p className="card-text" style={{ fontSize: "1rem", color: "#555", fontWeight: "bold" }}>
                        สถานะการจอง: <span style={{ color: "#28a745", fontWeight: "bold" }}>{status}</span></p>
                    <a  className="btn btn-outline-danger btn-sm"
                        style={{ marginRight: "0.1rem" }}>ยกเลิกการจอง</a>
                    <a href="/TripDetailPage/${props.Tours.id}/review"
                        className="btn btn-link btn-sm float-end"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        style={{ marginLeft: "auto", marginRight: "0.1rem" }}>ยังไม่ได้ชำระเงิน?</a>
                </div>
            </div>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">thai QR payment</h4>
                            <button type="button" className="btn-close mx-2" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <div className="row d-flex justify-content-center align-items-center">
                                <img src={qrCode} style={{ height: "200px", width: "200px" }} />
                                <h5><b><div>รวมทั้งหมด {total_price?.toLocaleString('en-US')} บาท</div></b></h5>
                            </div>

                            <div>ช่องทางการติดต่อ</div>
                            <div>Line ID : @PHANG NGA</div>
                            <div>Facebook : www.facebook.com/PHANG NGA</div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardUserStatus;
