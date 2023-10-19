import image from "../../public/img/us.jpg";
import usStyles from '~/styles/us.css'

export function meta() {
  return [{ title: "GuitarLA - About Us", description: "online guitar store" }];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: usStyles,
    },
    {
      rel: "preload",
      href: image,
      as: "image",
    },
  ];
}

function Us() {
  return (
    <main className="conteiner us">
      <h2 className="heading div content">About us</h2>
      <div className="content">
        <img src={image} alt="about us" />
        <div>
          <p>
            Volutpat ac tincidunt vitae semper quis. Augue mauris augue neque
            gravida in fermentum et sollicitudin. Euismod in pellentesque massa
            placerat duis. Quis imperdiet massa tincidunt nunc pulvinar sapien.
            Tellus id interdum velit laoreet id. Risus viverra adipiscing at in
            tellus integer feugiat scelerisque.
          </p>
          <p>
            Volutpat ac tincidunt vitae semper quis. Augue mauris augue neque
            gravida in fermentum et sollicitudin. Euismod in pellentesque massa
            placerat duis. Quis imperdiet massa tincidunt nunc pulvinar sapien.
            Tellus id interdum velit laoreet id. Risus viverra adipiscing at in
            tellus integer feugiat scelerisque.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Us;
