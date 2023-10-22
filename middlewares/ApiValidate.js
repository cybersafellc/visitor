export const apiValidate = async (req, res, next) => {
  try {
    const { apikey1 } = await req.body;
    const { apikey2 } = await req.query;
    if (apikey1 || apikey2) {
      if (apikey1 === process.env.APIKEY || apikey2 === process.env.APIKEY) {
        next();
      } else {
        res.status(301).json({
          message: false,
        });
      }
    } else {
      res.status(301).json({
        message: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "server error",
    });
  }
};
