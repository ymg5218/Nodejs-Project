<template>
<div class="col-lg-12">
    <div class="card">
    <div class="card-header">
            <h3 class="card-title">글제목 : {{title}}</h3>
        </div>
        <div class="card-body" style="height: 700px">
            {{content}}
        </div>
        <div class="card-footer">
            <div class="user-block">
                <span class="username">
                작성자 : {{writer}}
                </span>
                <span class="description"><fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value="${board.created_datetime}"/></span>
            </div>
        </div>
        <div class="card-footer">
            <form role="form" method="post">
                <input type="hidden" name="id" value="${board.id}">
            </form>
            <button type="submit" class="btn btn-primary" v-on:click="fnList" id ="listBtn"><i class="fa fa-list"></i> 목록</button>
            <c:if test="${board.writer  == account.username and !empty account}"> 
            <div class="float-right">
                <button type="submit" class="btn btn-warning" v-on:click="fnUpdate"  id = "modBtn"><i class="fa fa-edit"></i> 수정</button>
                <button type="submit" class="btn btn-danger" v-on:click="fnDelete" id = "delBtn"><i class="fa fa-trash"></i> 삭제</button>
            </div>
        </c:if>
        </div>
    </div>
</div>
  </template>
  
  <script>

  export default {
    name:'BoardDetail',
    data() { //변수생성
      return {
        requestBody: this.$route.query,
      
        title: '',
        writer: '',
        content: '',
        datetime: ''
      }
    },
    mounted() {
      this.fnGetView()
    },
    methods: {
      fnGetView() {
        this.$axios.post("http://localhost:3000/board/findOne",{
          _id: this.requestBody._id
        }).then((res) => {
          console.log("여기 들어옴")
          this.title = res.data.title
          this.writer = res.data.writer_nickname
          this.content = res.data.content
          this.datetime = res.data.datetime
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      },
      fnList() {
        delete this.requestBody._id
        this.$router.push({
          path: './list',
          query: this.requestBody
        })
      },
      fnUpdate() {
        this.$router.push({
          path: './write',
          query: this.requestBody
        })
      },
      fnDelete() {
        console.log(this.requestBody._id)
        if (!confirm("삭제하시겠습니까?")) return
  
        this.$axios.delete(`http://localhost:3000/board/delete/${this.requestBody._id}`)
            .then(() => {
              alert('삭제되었습니다.')
              this.fnList();
            }).catch((err) => {
          console.log(err);
        })
      }
    }
  }
  </script>
  <style scoped>
  
  
  </style>