import React from "react";
import { useForm } from "react-hook-form";
import { Form, Label } from "reactstrap";
import axios from "axios";

function App() {
  const { register, errors, handleSubmit } = useForm({});

  const onSubmit = async data => {
    console.log(data);
    axios
      .post(`http://localhost:8080/addactivity`, { data })
      .then(alert("Register successful!"));
    window.location.replace("/allarticles");
  };

  return (
    <div class="card-container">
      <h4>Add Activity</h4>
      <Form onSubmit={e => e.preventDefault()} className="px-3 pb-4">
        <div className="form-group">
          <Label for="datelabel">Tanggal</Label>
          <input
            type="date"
            placeholder="Tanggal"
            name="date"
            ref={register({
              required: "Date Required!"
            })}
            onClick="this.value=''"
          />
          {errors.date && <p>{errors.date.message}</p>}
        </div>
        <div className="form-group">
          <Label for="activitylabel">Jenis Kegiatan</Label>
          <select name="activity" ref={register()} onClick="'this.value='">
            <option value="Tidur">Tidur</option>
            <option value="Makan">Makan</option>
            <option value="Olahraga">Olahraga</option>
            <option value="Aktifitas Lain">Aktifitas Lain</option>
          </select>
        </div>
        <div className="form-group">
          <Label for="durationlabel">Durasi</Label>
          <input
            type="number"
            placeholder="Durasi"
            name="duration"
            ref={register({
              required: "Duration required!"
            })}
            onClick="this.value=''"
          />
          {errors.duration && <p>{errors.duration.message}</p>}
        </div>
        <div className="form-group">
          <Label for="detailslabel">Keterangan</Label>
          <input
            type="text"
            placeholder="Keterangan"
            name="details"
            ref={register({
              required: "Details required!"
            })}
            onClick="this.value=''"
          />
          {errors.details && <p>{errors.details.message}</p>}
        </div>
        <div className="form-group">
          <Label for="weightlabel">Berat Badan</Label>
          <input
            type="number"
            step=".01"
            placeholder="Berat Badan"
            name="weight"
            ref={register({
              required: "Weight required!"
            })}
            onClick="this.value=''"
          />
          {errors.weight && <p>{errors.weight.message}</p>}
        </div>
        <input type="submit" onClick={handleSubmit(onSubmit)} />
      </Form>
    </div>
  );
}

export default App;
