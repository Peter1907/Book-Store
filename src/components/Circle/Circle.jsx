import s from './Circle.module.css';

const Circle = () => {
  return (
    <div className={s.circleWrap}>
      <div className={s.circle}>
        <div className={`${s.mask} ${s.half}`}>
          <div className={s.fill} />
        </div>
        <div className={`${s.mask} ${s.full}`}>
          <div className={s.fill} />
        </div>
        <div className={s.insideCircle} />
      </div>
    </div>
  );
}

export default Circle;
