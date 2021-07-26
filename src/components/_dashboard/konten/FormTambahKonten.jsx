import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { LoadingButton } from '@material-ui/lab';
import * as Yup from 'yup';

import {
  Link,
  Stack,
  Checkbox,
  TextField,
  MenuItem,
  FormControl,
  Typography
} from '@material-ui/core';

const SegmenValue = [
  {
    value: 'cocoroLife',
    label: 'Banner Cocoro life'
  }
];

const StatusValue = [
  {
    value: 'aktif',
    label: 'Aktif'
  },
  {
    value: 'nonAktif',
    label: 'Tidak Aktif'
  }
];

export default function FormTambahKonten() {
  const AddKontenSchema = Yup.object().shape({
    judulKonten: Yup.string().required('Judul Konten is required'),
    segemenKonten: Yup.string().required('SegemenKonten is required'),
    status: Yup.string().required('Status is required')
  });
  const navigate = useNavigate();
  const [segmen, setSegmen] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setSegmen(event.target.value);
    setStatus(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      judulKonten: '',
      segemenKonten: '',
      status: ''
    },
    validationSchema: AddKontenSchema,
    onSubmit: () => {
      navigate('/dashboard/konten', { replace: true });
    }
  });
  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <TextField
              fullWidth
              required
              id="outlined-required"
              placeholder="Contoh: banner promo cocorolife"
              label="Judul Konten"
              {...getFieldProps('judulKonten')}
              error={Boolean(touched.judulKonten && errors.judulKonten)}
              helperText={touched.judulKonten && errors.judulKonten}
            />
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              select
              required
              label="Segmen Konten"
              value={segmen}
              onChange={handleChange}
              {...getFieldProps('segemenKonten')}
            >
              {SegmenValue.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              required
              id="outlined-required"
              value="JPG, JPEG, PNG (Max 2 MB)"
              label="Upload Konten"
              InputProps={{
                readOnly: true
              }}
            >
              <input type="file" hidden />
            </TextField>
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              select
              label="Status"
              value={status}
              onChange={handleChange}
              {...getFieldProps('status')}
            >
              {StatusValue.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl>
            <LoadingButton
              size="large"
              style={{ width: '50%', margin: 'auto' }}
              type="submit"
              variant="contained"
              color="main"
              loading={isSubmitting}
            >
              <Typography color="white">Tambah Konten</Typography>
            </LoadingButton>
          </FormControl>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
