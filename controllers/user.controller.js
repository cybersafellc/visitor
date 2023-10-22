const ipAddress = [];

export const visitor = async (req, res) => {
  try {
    const { ip } = await req.body;
    if (ip) {
      await ipAddress.push(ip);
      res.status(200).json({
        message: "done check",
        ip: ip,
      });
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

export const totalVisitor = async (req, res) => {
  try {
    res.status(200).json({
      message: "success request",
      dataVisitor: ipAddress,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "server error",
    });
  }
};
