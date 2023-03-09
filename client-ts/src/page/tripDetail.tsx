import UserNavbar from '../components/UserNavbar';
import Tour from '../models/tour';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Repo from '../repositories';
import conf from '../conf';


const TripDetail = () => {
  const [tourdata, setTourData] = useState<Tour[]>([]);
  const navigate = useNavigate();
  const params = useParams();

  const data = tourdata.length > 0 ? tourdata[0].attributes : null;
  const thumbnail = `${conf.apiPrefix}${data?.image.data[0].attributes.url}`;

  const LinkToPayment = () => {
    navigate(`/TripDetailPage/${params.id}/payment`)
  }
  const LinkToComment = () => {
    const tourId = params.id;
    const tourName = data?.title;
    navigate(`/TripDetailPage/${tourId}/review?tour_id=${tourId}&tour_name=${tourName}`);
  }
  

  const fetchData = async () => {
    try {
        const res = await Repo.Tourdata.getTourById(params.id as string);
        if (res) {
            if (Array.isArray(res)) {
                setTourData(res);
            } else {
                setTourData([res]);
            }
        }
    } catch (error) {
        console.log(error);
    }
};

  useEffect(() => {
    fetchData()
  }, [params.id])



  return (
    <div className="Login-BG">
      <UserNavbar />
      <div className="container py-5">
        <div className="card rounded-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="card-body p-5" >
            <div className="row">
              <div className="col-sm-6">
                <div className="text-center mb-4">
                  <img src={thumbnail} height="60%" width="45%" className="card-img-top rounded-3" />
                </div>
                <h5 className="card-title" style={{ color: 'white' }}>{data?.title}</h5>
                <div>
                    <p className="card-text" style={{ color: 'white', marginBottom: '0.5em' }}>{data?.address}</p>
                    <span style={{ color: 'white', marginRight: '0.5em' }}>Direction Link :</span>
                    <a href={data?.direction} className="card-text" style={{ color: 'skyblue' }} target="_blank" onClick={(event) => { (event.target as HTMLAnchorElement).style.color = '#FF66FF' }}>{data?.direction}</a>
                </div>
              </div>
              <div className="col-sm-6" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '20px' }}>
                  <h5 className="card-title" style={{ fontSize: '18px', fontVariant: 'common-ligatures', marginTop: '20px', color: 'white' }}>รายละเอียดทริป</h5>
                  <p className="card-text" style={{ fontSize: '15px', color: 'white' }}>{data?.description?.split('\n').map((line, index) => <div key={index}>{line}</div>)}</p>
                </div>
                <div>
                  <h5 className="card-title" style={{ fontSize: '18px', fontVariant: 'common-ligatures', marginTop: '20px', color: 'white' }}>สิ่งที่รวมในโปรแกรมทัวร์</h5>
                  <p className="card-text" style={{ fontSize: '15px', color: 'white' }}>{data?.conditions?.split('\n').map((line, index) => <div key={index}>{line}</div>)}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="text-center">
                  <div className="btn btn-primary" style={{ marginTop: '20px' }} onClick={LinkToPayment}>จองเลย!</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="text-center mt-4" style={{ position: 'relative' }}>
                  <a className="btn btn-primary" style={{ marginTop: '0px' }} onClick={LinkToComment}>แสดงความคิดเห็น</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TripDetail;
