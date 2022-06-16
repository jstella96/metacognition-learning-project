<template>
    <div class="card-list">
        <div class="card">
            <router-link to="/" >
                <el-col :span="8" >
                <div class="card__thumbnail"></div>
                    <img class="img" src="../assets/image/face.png" />
                </el-col>
                <el-col :span="16" >
                   <div class="card__title">
                        <h3>운영체제란 무엇인가</h3>
                   </div>
                    <div class="card__info">
                        <span>2022-04-23</span> | <span>1분28초</span>
                   </div>
                </el-col>
            </router-link>
        </div>
        <div class="card">
            <router-link to="/" >
                <el-col :span="8" >
                <div class="card__thumbnail"></div>
                    <img class="img" src="../assets/image/face.png" />
                </el-col>
                <el-col :span="16" >
                   <div class="card__title">
                        <h3>이벤트 스트림이란 무엇인가</h3>
                   </div>
                    <div class="card__info">
                        <span>2022-04-25</span> | <span>2분23초</span>
                   </div>
                </el-col>
            </router-link>
        </div>
    </div>
</template>

