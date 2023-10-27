const React = require('react');
const Layout = require('./Layout');

function QuestionPage() {
  return (
    <Layout>
      <div className="team">
        <div>Demid</div>
        <img
          src="https://t3.ftcdn.net/jpg/04/30/43/54/360_F_430435425_jcQk0X3xT1dkrVuMpDM1dKT1QVc5WiU6.jpg"
          alt="sdaas"
        />
        <div>Ilya</div>
        <img
          src="https://t3.ftcdn.net/jpg/04/30/43/54/360_F_430435425_jcQk0X3xT1dkrVuMpDM1dKT1QVc5WiU6.jpg"
          alt="sdaas"
        />
        <div>Dannil</div>
        <img
          src="https://t3.ftcdn.net/jpg/04/30/43/54/360_F_430435425_jcQk0X3xT1dkrVuMpDM1dKT1QVc5WiU6.jpg"
          alt="sdaas"
        />
      </div>
    </Layout>
  );
}
module.exports = QuestionPage;
