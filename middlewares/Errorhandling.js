export const PageNotFound = async (req, res) => {
  try {
    res.status(404).json({
      message: "page not found",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "server error",
    });
  }
};
