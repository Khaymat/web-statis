from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto("http://localhost:3000", wait_until="networkidle")

        # Directly target the input field
        score_input = page.get_by_placeholder("Enter your score here...")

        # Wait for the input to be available
        score_input.wait_for(state="attached", timeout=20000)

        # Force interaction
        score_input.fill("2222")

        submit_button = page.get_by_role("button", name="Kirim")
        submit_button.click(force=True)

        # Wait for the 3D canvas to be visible
        canvas = page.locator("canvas")
        canvas.wait_for(state="visible", timeout=15000)

        page.wait_for_timeout(2000)

        page.screenshot(path="jules-scratch/verification/galaxy-view.png")
        print("Screenshot berhasil diambil.")

    except Exception as e:
        print(f"Terjadi kesalahan: {e}")
        page.screenshot(path="jules-scratch/verification/error.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
