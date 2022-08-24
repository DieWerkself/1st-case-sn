import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.photo_h}>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg"/>
            </div>
            <div className={s.photo_a}>
                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"/>
            </div>
        </div>
    );
}

export default ProfileInfo;
