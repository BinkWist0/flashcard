const React = require('react');
const Layout = require('./Layout');

function RatingPages({ report }) {
  return (
    <Layout>
      <div className="rep">
        {report.map((el) => (
          <p>
            Имя{el.name}|очки{el.scores}
          </p>
        ))}
      </div>
    </Layout>
  );
}

module.exports = RatingPages;
