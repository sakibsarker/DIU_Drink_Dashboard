import React from 'react'
import style from "../styles/Teacher.module.css"
const teacher = () => {
  return (
    <div>
      <div>

        <div className={style.container}>
        <img className={style.sirpicture} src='https://somporka.com/upload/photos/2020/03/QlVQ6W5AqvhAtbsMZjUe_10_a13aa0b1f1672890f6772b61fddb6de0_avatar_full.png'
                    alt='profile'
                />
          <h3 className={style.sirname}>Professor Dr. Touhid Bhuiyan</h3>
          <p className={style.deptname}>Department Head</p>
        </div>


        <div className={style.container}>
        <img className={style.sirpicture} src='https://somporka.com/upload/photos/2020/03/QlVQ6W5AqvhAtbsMZjUe_10_a13aa0b1f1672890f6772b61fddb6de0_avatar_full.png'
                    alt='profile'
                />
          <h3 className={style.sirname}>Professor Dr. Touhid Bhuiyan</h3>
          <p className={style.deptname}>Department Head</p>
        </div>

      </div>
    </div>
  )
}

export default teacher