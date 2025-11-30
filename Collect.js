export default async function handler(req, res) {
  try {
    const response = await fetch("https://interpals.net/list-files");
    const data = await response.json();

    res.status(200).json({
      success: true,
      files: data
    });

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch file list" });
  }
}