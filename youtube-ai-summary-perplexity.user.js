// ==UserScript==
// @name         YouTube Video AI Summary (Perplexity)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Adds a button to YouTube video pages to copy the URL and open a Perplexity AI summary in a new tab.
// @author       pullso 
// @namespace    https://github.com/pullso/youtube-ai-summary-perplexity/
// @supportURL   https://github.com/pullso/youtube-ai-summary-perplexity/issues
// @license      MIT
// @match        https://www.youtube.com/watch?v=*
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';

    console.log('YouTube Perplexity Summary script loaded');

    // Inject CSS for styling
    const styles = `
            #summaryButton {
            background-color: #f0f0f0;
            color: #333;
            border: 1px solid #ccc;
            padding: 8px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            margin: 10px 0;
            transition: background-color 0.2s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            z-index: 1000;
            }
        #summaryButton:hover {
            background-color: #e0e0e0;
        }
            #copyNotification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #333;
                color: white;
                padding: 10px 20px;
                border-radius: 4px;
                z-index: 10000;
                display: none;
            }
        `;

        // Append styles to the document head
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);

        // Function to inject the button and iframe container
        function injectSummaryElements() {
            // Try multiple selectors to find the video info container
            let videoInfo = document.querySelector('#above-the-fold') ||
                document.querySelector('#below') ||
                document.querySelector('#meta-contents');
            if (!videoInfo) {
                console.error('Video info container not found. Available selectors:', {
                    aboveTheFold: !!document.querySelector('#above-the-fold'),
                    below: !!document.querySelector('#below'),
                    metaContents: !!document.querySelector('#meta-contents')
                });
                return;
            }
            console.log('Video info container found:', videoInfo);

            // Create the button
            const summaryButton = document.createElement('button');
            summaryButton.id = 'summaryButton';
            summaryButton.textContent = 'Get Summary on Perplexity';

            videoInfo.appendChild(summaryButton);

            // Create the notification element
            const notification = document.createElement('div');
            notification.id = 'copyNotification';
            notification.textContent = 'URL copied to clipboard!';
            document.body.appendChild(notification);

            // Add click event listener to the button
            summaryButton.addEventListener('click', () => {
                const videoUrl = window.location.href;

                // Copy URL to clipboard
                GM_setClipboard(videoUrl);
                console.log('URL copied to clipboard:', videoUrl);

                // Show notification
                notification.style.display = 'block';
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 2000);

                // Open Perplexity in a new tab
                const perplexityUrl = `https://www.perplexity.ai/?q=${encodeURIComponent(videoUrl)}`;
                window.open(perplexityUrl, '_blank');
            });
        }

        // Wait for the page to load
        window.addEventListener('load', () => {
            console.log('Page loaded, attempting to inject elements');
            injectSummaryElements();
        });

        // Retry injection after a delay in case of dynamic content
        setTimeout(injectSummaryElements, 2000);
    })();
