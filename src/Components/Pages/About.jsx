import { Helmet } from "react-helmet";
import bgImage from "../../assets/shopping.jpeg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>GadgetHaven || About Us</title>
      </Helmet>

      <div
        className="hero h-[100vh] rounded-xl my-12 bg-purple-500 mt-20"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Welcome to GadgetHaven</h1>
            <p className="mb-5">
              At GadgetHaven, we bring you the latest and best gadgets on the
              market. From smartphones and wearables to essential accessories,
              our mission is to provide high-quality products and a seamless
              shopping experience. Discover top tech trends, reliable customer
              service, and exclusive offers designed for all gadget lovers.
            </p>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-purple-700">Contact Us</h1>
            <p className="py-6">
              Have questions about our products or need assistance with your
              order? Get in touch with us! Our team is here to help with any
              inquiries related to orders, product availability, or
              recommendations for the latest gadgets. We look forward to
              assisting you.
            </p>
          </div>
          <div className="card max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />

                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                  required
                />

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder="How can we help you?"
                className="textarea textarea-bordered"
                required
              ></textarea>

              <div className="form-control mt-6">
                <button className="btn bg-purple-700 text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
