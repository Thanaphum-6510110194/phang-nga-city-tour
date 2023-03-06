import { useEffect, useState } from "react";
import PaymentStatus from "../models/paymentStatus";
import qrcode from 'qrcode';
import Repo from '../repositories'
import { useParams } from "react-router-dom";

interface Props {
    statusData: PaymentStatus,
}

function CardUserStatus(props: Props) {
    const reviewData = props.statusData ? props.statusData.attributes : null;
    const start = reviewData?.tour_start;
    const image = reviewData?.image_url;
    const tour = reviewData?.tour_name;
    const status = reviewData?.status;
    const quantity = reviewData?.quantity;
    const total_price = reviewData?.total_price;

    const [qrCode, setQrCode] = useState<string>('');

    const cancelPayment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (window.confirm("คุณแน่ใจหรือไม่ว่าต้องการยกเลิกทัวร์ของคุณ")) {
            await Repo.Paymentdata.deletePayment(props.statusData.id);
            console.log("Deleted!");
            window.location.reload();
        }
    };


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
                        ราคา: <span style={{ color: "#2971e6", fontWeight: "bold" }}>{total_price.toLocaleString('en-US')}</span><span> บาท</span>
                        <br></br>
                        จำนวน: <span style={{ color: "#2971e6", fontWeight: "bold" }}>{quantity}</span><span> ท่าน</span>
                        <br></br>
                        สถานะการจอง: <span style={{ color: "#28a745", fontWeight: "bold" }}>{status}</span>
                        <br></br>
                        เริ่มเดินทางวันที่: <span style={{ color: "#2971e6", fontWeight: "bold" }}>{start}</span>
                    </p>
                    <form className="" onSubmit={cancelPayment}>
                        <button className="btn btn-outline-danger btn-sm"
                            type="submit"
                            style={{ marginRight: "0.1rem" }}>
                            ยกเลิกการจอง
                        </button>
                        <div className="btn btn-link btn-sm float-end"
                            data-bs-toggle="modal"
                            data-bs-target={`#myModal${reviewData.tour_id}`}
                            style={{ marginLeft: "auto", marginRight: "0.1rem" }}>
                            ยังไม่ได้ชำระเงิน?
                        </div>
                    </form>
                </div>
            </div>

            <div className="modal fade" id={`myModal${reviewData.tour_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Thai QR Payment</h4>
                            <button type="button" className="btn-close mx-2" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <div className="row d-flex justify-content-center align-items-center">
                                <img src={qrCode} style={{ height: "200px", width: "200px" }} />
                                <h5>
                                    <b>
                                        <div>รวมทั้งหมด {total_price.toLocaleString('en-US')} บาท</div>
                                    </b>
                                </h5>
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

