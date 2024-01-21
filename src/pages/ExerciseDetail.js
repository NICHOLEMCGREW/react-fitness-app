import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fectchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  useState [exrciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
const fetchExercisesData = async () => {
  const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
  
}
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
}

export default ExerciseDetail;
