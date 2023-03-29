import React from 'react'
import DetailPatient from '../components/Diagnosis/DetailPatient'
import DiagnosaCard from '../components/Diagnosis/DiagnosaCard'
import ListPatient from '../components/Diagnosis/ListPatient'
import PatientCard from '../components/Diagnosis/PatientCard'
import PredictResult from '../components/Diagnosis/PredictResult'
import ProgressCard from '../components/Diagnosis/ProgressCard'
import UserProfile from '../components/Diagnosis/UserProfile'
import UseToken from '../UseToken'
import { Navigate } from 'react-router-dom';
import Logout from '../components/Logout'


const Diagnosis = () => {
  const {token} = UseToken();

  if (token){
    return (
    <div className='Diagnosis m-5'>
			<div className="CardStatus flex gap-6 pb-8">
        {/* Profile User */}
				<UserProfile />
        {/* Patient Card */}
        <PatientCard />
        {/* Progress Card */}
        <ProgressCard />
        {/* Diagnosa Card */}
        <DiagnosaCard />
        <span className='justify-end'>
          <Logout />
        </span>
			</div>
      <div class="StatusPatients grid grid-cols-5 gap-4">
				<div class="Left col-span-2">
          <ListPatient />
        </div>
				<div class="Right col-span-3">
          <DetailPatient />
          <p class="Predict font-bold text-sm text-left">
            Prediksi / Rekomendasi Diagnosa
          </p>
          <PredictResult />
        </div>
      </div>

    </div>
    )
  } else {
		return <Navigate replace to="/login" />
  }
}

export default Diagnosis