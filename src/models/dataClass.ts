import axios from 'axios';

class Data {
  data = [];

  constructor() {
    
  }

  async getData(userId:any) {
    try {
      const response = await axios.post(`${window.location.origin}/api/data/get`, {
        id: userId
      });
      this.data = response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addData(userId:any, item:any) {
    try {
      const response = await axios.post(`${window.location.origin}/api/data/add`, {
        id: userId,
        item: item
      });
      this.data = response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteData(userId:any, index:any) {
    try {
      const response = await axios.post(`${window.location.origin}/api/data/delete`, {
        id: userId,
        index: index
      });
      this.data = response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async editData(userId:any, position:any, newData:any) {
    try {
      const response = await axios.post(`${window.location.origin}/api/data/edit`, {
        id: userId,
        position: position,
        newData: newData
      });
      this.data = response.data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default Data