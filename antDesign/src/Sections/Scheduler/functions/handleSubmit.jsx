export const handleSubmit = async () => {
    const dataFormated = new FormatData(form.getFieldsValue()).getDataListOfWorkers();
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api_v1/schedulers/`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataFormated)
        }
      );
      console.log(response);
    } catch (error) {
      console.log('Error during creation new worker!');
      console.log(error);
    }
  }
