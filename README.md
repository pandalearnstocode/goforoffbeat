# GoForOffbeat

A responsive, multi-page travel website for GoForOffbeat, with a focus on West Bengal and North Bengal and trip planning across India.

## Pages

- `index.html` — home, featured destinations and guest story area
- `destinations.html` — Bengal and pan-India destinations
- `packages.html` — suggested itineraries and departure dates
- `travel-guide.html` — seasonal timing, festivals and regional food
- `about.html` — managed travel services and planning approach
- `feedback.html` — guest feedback form
- `enquiry.html` — trip, hotel and transport enquiry form
- `image-credits.html` — destination photo sources and license details

Open `index.html` in a browser to preview. Package enquiry links prefill the enquiry form. The forms currently provide an in-page preview confirmation; connect a form service or backend to receive submissions.

## GitHub Pages deployment

Set the repository Pages build and deployment source to **GitHub Actions**. The workflow in `.github/workflows/pages.yml` deploys pushes from `develop` and `master`; manual runs are restricted to those branches.
