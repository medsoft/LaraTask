<template>

<div>
  <button type="button" class="btn btn-primary btn-sm my-3" data-toggle="modal" data-target="#exampleModal">
   Tache 
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Un nouvelle tache </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="">
          <div class="form-group">
            <label for="">Tache</label>
            <textarea  class="form-control" v-model="name" name="name" id="name" rows="4"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
         <button type="submit" class="btn btn-primary" @click="taskStore">Enregistrer</button>
      </div>
    </div>
  </div>
  </div>
</div>
</template>


<script>
export default {
  data ()  {
    return {
      name: ''
    }
  },
  methods: {
    taskStore (){
      axios.post('http://127.0.0.1:8000/task', 
      {name: this.name})
      .then(response => this.$emit('task-added', response))
      .catch(error => console.log(error)); 
    }
  }
}

</script>
